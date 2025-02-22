import React, { useCallback, useEffect, useState } from 'react'
import { ChooseStatus } from './ChooseStatus'
import { ListContent } from './ListContent'
import { WokingInfo } from './WokingInfo'
import { Calendar } from './Calendar'
import dayjs from 'dayjs'
import api from './axiosApi'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

const END_POINT = '/status'
dayjs.extend(utc)
dayjs.extend(timezone)

export const Home = () => {
  const [statusList, setStatusList] = useState([])

  const getStatusList = async () => {
    try {
      const res = await api.get(END_POINT)
      setStatusList(res.data)
    } catch (error) {
      // do nothing
    }
  }

  const creataStatus = async (time, status) => {
    try {
      const timezoneName = dayjs.tz.guess()
      const localTime = dayjs().tz(timezoneName).format()
      const data = { time: localTime, status: status }
      console.log(data)
      await api.post(END_POINT, data)
      await getStatusList()
    } catch (error) {
      // do nothing
    }
  }

  useEffect(() => {
    getStatusList()
  }, [])

  return (
    <div style={{ marginLeft: '50px', display: 'flex', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          height: '100%',
          marginRight: '40px',
        }}
      >
        <ChooseStatus creataStatus={creataStatus} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListContent statusList={statusList} />
          <WokingInfo />
        </div>
      </div>
      <Calendar />
    </div>
  )
}
