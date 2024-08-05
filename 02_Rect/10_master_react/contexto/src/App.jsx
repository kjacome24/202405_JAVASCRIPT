import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Abuelo from './components/Abuelo'
import AppContext from './context/AppContext'

function App() {
  const [mensaje, setMensaje] = useState("Hola a nuestra aplciacionde contexto!")

  const valoresContexto = {
    mensaje,
    setMensaje
  }

  return (
    <>
      <AppContext.Provider value={valoresContexto}>
        <h1>Como Utiliza el Contexto?</h1>
        <Abuelo />
      </AppContext.Provider>
    </>
  )
}

export default App
