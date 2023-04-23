import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Layout } from './component/Layout'
import { ContentWrapper } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentWrapper>
      <Layout />
      <App />
    </ContentWrapper>
  </React.StrictMode>
)
