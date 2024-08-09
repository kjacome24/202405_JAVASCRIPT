import { useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './components/Encabezado';
import PieDePagina from './components/PieDePagina';
import ApiEstudiantes from './views/ApiEstudiantes';
import ListaEstudiante from './views/ListaEstudiante'
import ApiUnEstudiante from './views/ApiUnEstudiante';
import Formulario from './components/Formulario';

function App() {
  const [dataAPIEstudiantes, setDataAPIEstudiantes] = useState({
    arregloApiEstudiantes: [],
    errorApiEstudiantes: null
  })

  return (
    <>
      <ApiEstudiantes setDataAPIEstudiantes={setDataAPIEstudiantes} dataAPIEstudiantes={dataAPIEstudiantes}/>
      < Encabezado />
      <div className='contenido'>
        <Link to="/estudiantes">Lista de Estudiantes</Link>-
        <Link to="/formulario">Agregar Estudiante</Link>
        <br></br>
        <br></br>
        <Routes>
          <Route path="/estudiantes" element={<ListaEstudiante dataAPIEstudiantes={dataAPIEstudiantes} />} />
          <Route path="/estudiante/:email" element={<ApiUnEstudiante dataAPIEstudiantes={dataAPIEstudiantes} setDataAPIEstudiantes={setDataAPIEstudiantes}/>} />
          <Route path='/formulario' element={<Formulario setDataAPIEstudiantes={setDataAPIEstudiantes} dataAPIEstudiantes={dataAPIEstudiantes}/> }/>
        </Routes>
      </div>
      < PieDePagina />
    </>
  )
}

export default App
