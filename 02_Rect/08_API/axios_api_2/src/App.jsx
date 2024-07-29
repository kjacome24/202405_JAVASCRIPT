import { useState } from 'react';
import './App.css';
import ComponenteActividad from './components/ComponenteActividad';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponenteActividad />
    </>
  )
}

export default App
