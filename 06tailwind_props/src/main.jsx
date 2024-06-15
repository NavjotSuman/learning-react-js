import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/card.jsx'

const arr = [1,2,3]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card username="navjot" btnname="click Me" myarr={arr}/>
    {/* <Card />
    <Card /> */}
  </React.StrictMode>,
)
