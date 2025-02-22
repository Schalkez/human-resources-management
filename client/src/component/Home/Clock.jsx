import React, { useState, useEffect } from 'react'
import clockIcon from './assets/clock.svg'
import styled from 'styled-components'

export const Clock = ({ setGetDateTime }) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date()
      setTime(currentDate)
      setGetDateTime(currentDate)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours()
  const secondDegrees = (seconds / 60) * 360 + 90
  const minuteDegrees = (minutes / 60) * 360 + 90
  const hourDegrees = (hours / 12) * 360 + 90

  return (
    <ClockWrapper background={clockIcon} className='clock'>
      <div
        className='hour-hand'
        style={{ transform: `rotate(${hourDegrees}deg)`, width: '15px' }}
      />
      <div
        className='minute-hand'
        style={{ transform: `rotate(${minuteDegrees}deg)` }}
      />
      <div
        className='second-hand'
        style={{ transform: `rotate(${secondDegrees}deg)` }}
      />
    </ClockWrapper>
  )
}

const ClockWrapper = styled.div`
  background: ${({ background }) =>
    `url(${background}) no-repeat center center`};
  background-size: 150px;
`
