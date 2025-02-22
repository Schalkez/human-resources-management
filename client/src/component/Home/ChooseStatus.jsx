import React from 'react'
import leaveIcon from './assets/leave.svg'
import otIcon from './assets/ot.svg'
import restIcon from './assets/rest.svg'
import workingIcon from './assets/working.svg'
import styled from 'styled-components'
import dayjs from 'dayjs'

export const ChooseStatus = ({ creataStatus }) => {
  const status = [
    { id: 0, color: '#6F6AF2', iconUrl: workingIcon, content: '出勤' },
    { id: 1, color: '#DD2838', iconUrl: leaveIcon, content: '退勤' },
    { id: 2, color: '#5DD75B', iconUrl: otIcon, content: '残業' },
    { id: 3, color: '#C5C3F7', iconUrl: restIcon, content: '休暇' },
  ]

  const currentTime = Number(dayjs().format('H'))

  const handleDisplayAisatsu = () => {
    if (currentTime <= 11) {
      return 'おはよう'
    }
    if (currentTime <= 18) {
      return 'こんにちは'
    }
    if (currentTime <= 23) {
      return 'こんばんは'
    }
  }

  const handleClick = (status) => {
    const time = new Date()
    creataStatus(time, status)
  }

  return (
    <div style={{ height: '40%', marginBottom: '40px' }}>
      <Name>{handleDisplayAisatsu()}, VO DAI TRINH</Name>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          columnGap: '20px',
        }}
      >
        {status.map((stt) => (
          <Status key={stt.id} onClick={() => handleClick(stt.id)}>
            <div
              style={{
                position: 'absolute',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                backgroundColor: stt.color,
                top: '10px',
                right: '10px',
              }}
            />
            <img width={30} height={33} src={stt.iconUrl} alt='' />
            <div style={{ marginTop: '15px' }}>{stt.content}</div>
          </Status>
        ))}
      </div>
    </div>
  )
}

const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 150px;
  background: #ffffff;
  box-shadow: 4px 4px 15px 2px rgba(212, 210, 248, 0.5);
  border-radius: 15px;
  cursor: pointer;
`

const Name = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 49px;
  margin-bottom: 15px;
  color: #383576;
`
