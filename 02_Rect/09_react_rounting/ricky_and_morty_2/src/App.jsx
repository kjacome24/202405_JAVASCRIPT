import './App.css'
import Encabezado from './components/Encabezado'
import Filtro from './components/Filtro'
import PieDePagina from './components/PieDePagina'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import NoEncontrado from './components/NoEncontrado'
import Tarjeta from './components/Tarjeta'
import ApiRick from './views/ApiRick'

function App() {


  return (
    <>
      < Encabezado />
      <div className='contenido'>
        <Filtro />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/:recurso/:id" element={<ApiRick />}/>
          <Route path="*" element={<NoEncontrado />}/>
        </Routes>
      </div>
      < PieDePagina />
    </>
  )
}

export default App
