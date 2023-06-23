import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Estou importando o css global(toda a página)
import "./style/style(global).css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
