from fastapi import FastAPI, HTTPException, Depends, Response
from pydantic import BaseModel
import psycopg2
from sqlalchemy.orm import Session
import asyncio
import asyncpg
import json
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1",
    "http://127.0.0.1:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

class Status(BaseModel):
    time: datetime
    status: int


async def save_status(status: Status):
    conn = await asyncpg.connect(user="postgres", password="admin",
                            database="qlns", host="localhost")
    try:
        status_dict = status.dict()
        time_str = status_dict["time"].strftime("%Y-%m-%d %H:%M:%S")
        id = await conn.fetchval("INSERT INTO status (status, time) VALUES ($1, $2) RETURNING id", status.status, time_str)
        result = await conn.fetchrow("SELECT * FROM status WHERE id = $1", id)
        return result
    finally:
        await conn.close()


async def get_status_list():
    conn = await asyncpg.connect(user="postgres", password="admin",
                            database="qlns", host="localhost")
    try:
        results = await conn.fetch("SELECT * FROM status")
        status_list = []
        for result in results:
            status = {
                "id": result["id"],
                "status": result["status"],
                "time": datetime.fromisoformat(result["time"]).isoformat()
            }
            status_list.append(status)

        return status_list
    finally:
        await conn.close()

@app.get("/status")
async def get_status():
    status_list = await get_status_list()
    return status_list


@app.post("/status", response_model=Status)
async def create_status(status: Status):
    try:
        result = await save_status(status)
        time = datetime.fromisoformat(result["time"]).replace(tzinfo=None)
        return Status(time=time, status=result["status"])
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=500, detail=str(e))