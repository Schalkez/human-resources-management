import React from 'react'
import styled from 'styled-components'
import { List } from 'antd'
import dayjs from 'dayjs'

const statusTitle = {
  0: '退勤',
  1: '出勤',
  2: '残業',
  3: '休暇',
}

const statusColor = {
  0: '#6F6AF2',
  1: '#DD2838',
  2: 'rgb(93, 215, 91)',
  3: 'rgb(197, 195, 247)',
}

const data = [
  { id: 0, dateTime: '2022年10月20日（木）', status: 0 },
  { id: 1, dateTime: '2022年10月20日（木）', status: 1 },
  { id: 2, dateTime: '2022年10月20日（木）', status: 1 },
  { id: 3, dateTime: '2022年10月20日（木）', status: 0 },
]

export const ListContent = ({ statusList }) => {
  return (
    <div style={{ width: '57%' }}>
      <Title
        style={{
          color: '#383576',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '36px',
          marginBottom: '20px',
          width: '60%',
        }}
      >
        最近の活動
      </Title>
      <List
        dataSource={statusList}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              marginBottom: '5px',
              borderRadius: '15px',
              padding: '10px 20px',
              display: 'flex',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
            }}
          >
            <div>{dayjs(item.time).format('YYYY年MM月DD日')}</div>
            <div>{dayjs(item.time).format('H時m分s秒')}</div>
            <Tag status={item.status}>{statusTitle[item.status]}</Tag>
          </List.Item>
        )}
      />
    </div>
  )
}

const Title = styled.div``

const Tag = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  color: #ffffff;
  background-color: ${({ status }) => statusColor[status]};
`
