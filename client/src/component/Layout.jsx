import React from 'react'
import styled from 'styled-components'
import homeIcon from './assets/home.svg'
import logoutIcon from './assets/logout.svg'
import settingIcon from './assets/setting.svg'
import timeSheetIcon from './assets/timeSheet.svg'
import userIcon from './assets/user.svg'

export const Layout = () => {
  const panelItems = [
    { text: 'ホーム', iconUrl: homeIcon, marginTop: '0' },
    { text: 'ユーザ', iconUrl: userIcon, marginTop: '50px' },
    { text: 'タイムシート', iconUrl: timeSheetIcon, marginTop: '50px' },
    { text: '設定', iconUrl: settingIcon, marginTop: '50px' },
    { text: 'ログアウト', iconUrl: logoutIcon, marginTop: '90px' },
  ]

  const isActive = 0

  return (
    <LayoutWrapper>
      <LabelWrapper>
        <span style={{ color: '#F8FAFB' }}>AM</span>
        <CompanyName style={{ color: '#F8FAFB' }}>RIKKEI</CompanyName>
      </LabelWrapper>
      {panelItems.map((item, index) => (
        <div
          style={{
            marginTop: item.marginTop,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '60%',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: isActive === index ? 'block' : 'none',
              position: 'absolute',
              width: ' 10px',
              height: '60px',
              left: '-23px',
              border: '1px solid #ffffff',
              borderRadius: '5px',
              backgroundColor: '#6F6AF2',
            }}
          />
          <img
            style={{ maxWidth: '50%', marginBottom: '5px' }}
            src={item.iconUrl}
            alt=''
          />
          <div style={{ fontSize: '10px', color: '#F8FAFB' }}>{item.text}</div>
        </div>
      ))}
    </LayoutWrapper>
  )
}

const PanelItem = styled.div``

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 600px;
  background-color: #6f6af2;
  border-radius: 10px;
  padding: 10px 5px;
`

const CompanyName = styled.div`
  font-weight: 900;
  font-size: 12px;
  line-height: 18px;
`

const LabelWrapper = styled.div`
  display: flex;
  width: fit-content;
  color: '#F8FAFB';
  flex-direction: column;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 28px;
  line-height: 42px;
`
