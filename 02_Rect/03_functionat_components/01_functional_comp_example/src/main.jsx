import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import Navegador from './components/Navegador/Navegador'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navegador />
    <App />
  </React.StrictMode>,
)
