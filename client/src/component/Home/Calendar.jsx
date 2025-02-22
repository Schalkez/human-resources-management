import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, TimePicker } from 'antd'
import { UserOutlined, NotificationOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { Clock } from './Clock'

export const Calendar = () => {
  const [getDateTime, setGetDateTime] = useState('')

  return (
    <div
      style={{ padding: '30px 40px', backgroundColor: '#F2F2FD', width: '24%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            border: '1px solid #6F6AF2',
          }}
        />
        <div>
          <Name>VO DAI TRINH</Name>
          <div style={{ display: 'flex' }}>
            <Button
              style={{
                backgroundColor: '#6F6AF2',
                color: '#FFFFFF',
                fontSize: '8px',
                padding: '5px',
                height: 'fit-content',
              }}
              icon={<UserOutlined />}
            >
              メンバー
            </Button>
            <Button
              style={{
                backgroundColor: '#6F6AF2',
                color: '#FFFFFF',
                fontSize: '8px',
                padding: '5px',
                height: 'fit-content',
              }}
              icon={<UserOutlined />}
            >
              メンバー
            </Button>
            <Button
              style={{
                backgroundColor: '#6F6AF2',
                color: '#FFFFFF',
                fontSize: '8px',
                padding: '5px',
                height: 'fit-content',
              }}
              icon={<UserOutlined />}
            >
              メンバー
            </Button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NotificationOutlined />
        </div>
      </div>
      <div
        style={{
          height: '150px',
          backgroundColor: '#6F6AF2',
          boxShadow: '4px 4px 12px 7px rgba(212, 210, 248, 0.5)',
          borderRadius: '15px',
          position: 'relative',
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Clock
          style={{ position: 'absolute', top: '-30px' }}
          setGetDateTime={setGetDateTime}
        />
        <Time>{dayjs(getDateTime).format('H:m:s')}</Time>
        <Date>{dayjs(getDateTime).format('YYYY年M月D日')}</Date>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Name>カレンダー</Name>
        <div>
          <DayPicker />
        </div>
      </div>
    </div>
  )
}

const Date = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`

const Time = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  margin-top: 10px;
  color: #ffffff;
`

const Name = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  color: #383576;
`

const Tag = styled.div`
  display: inline-block;
  font-weight: 800;
  font-size: 10px;
  line-height: 15px;
  color: #ffffff;
`
