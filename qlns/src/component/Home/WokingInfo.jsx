import React from 'react'
import styled from 'styled-components'

export const WokingInfo = () => {
  return (
    <div style={{ height: '100%', width: '40%' }}>
      <Title
        style={{
          color: '#383576',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '36px',
          marginBottom: '20px',
        }}
      >
        最近の活動
      </Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '15px',
        }}
      >
        <FirstInfoContent>
          <BlockContent style={{ width: '60%' }}>
            <Weekday>出勤日</Weekday>
            <Date>14日</Date>
          </BlockContent>
          <BlockContent style={{ width: '35%' }}>
            <Weekday>土日祝</Weekday>
            <Date>6日</Date>
          </BlockContent>
        </FirstInfoContent>

        <SecondInfoContent>
          <BlockContent style={{ width: '100%' }}>
            <Weekday>出勤日</Weekday>
            <Date>14日</Date>
          </BlockContent>
        </SecondInfoContent>

        <ThursInfoContent>
          <BlockContent style={{ width: '50%' }}>
            <Weekday>出勤日</Weekday>
            <Date>14日</Date>
          </BlockContent>
          <BlockContent style={{ width: '50%' }}>
            <Weekday>土日祝</Weekday>
            <Date>6日</Date>
          </BlockContent>
        </ThursInfoContent>
      </div>
    </div>
  )
}

const Weekday = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`

const Title = styled.div``

const Date = styled.div`
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
`

const FirstInfoContent = styled.div`
  display: flex;
  column-gap: 20px;
`

const SecondInfoContent = styled.div`
  display: flex;
  column-gap: 20px;
`
const ThursInfoContent = styled.div`
  display: flex;
  column-gap: 20px;
`

const BlockContent = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 15px 2px rgba(212, 210, 248, 0.5);
  border-radius: 15px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #43408d;
`
