import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import Redespacho from './pages/Redespacho/redespacho.tsx'
import HeaderMain from './components/HeaderMain/HeaderMain.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderMain />
    <Redespacho />
    
  
    
  </React.StrictMode>,
)
