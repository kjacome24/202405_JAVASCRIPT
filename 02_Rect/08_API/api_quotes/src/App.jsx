// App.jsx
import { useState } from 'react'
import './App.css'
import ComponenteCitas from './components/ComponenteCitas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponenteCitas />
    </>
  )
}

export default App
