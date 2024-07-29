import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteActividad from './components/ComponenteActividad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponenteActividad/>
    </>
  )
}

export default App
