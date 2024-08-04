// App.jsx

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaEstudiantes from './components/ListaEstudiantes';
import Formulario from './components/Formulario';
import DetalleEstudiante from './components/DetalleEstudiante'
import { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import NotFound from './components/NoEncontrado'

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { nombre: "Arturo", apellido: "Duque", edad: 21, id: 1 },
    { nombre: "Milena", apellido: "Neira", edad: 41, id: 2 },
    { nombre: "Andrea", apellido: "Sira", edad: 51, id: 3 }
  ]);

  const [filtro, setFiltro] = useState("");
  const [showform, setShowform] = useState(false);

  const agregarEstudiante = (estado) => {
    const {nombre, apellido, edad} = estado;
    const newEstudiante = { nombre, apellido, edad, id: estudiantes.length +1 };
    setEstudiantes(prevEstudiantes => [...prevEstudiantes, newEstudiante]);
  };

  const listafiltrada = estudiantes.filter(estudiante =>
    estudiante.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className='main'>
      <div className='flex-item'>
        <h1>Aplicacion de Estudiantes</h1>
        <Link to="/estudiantes">Lista de Estudiantes</Link>-
        <Link to="/formulario">Agregar Estudiante</Link>
        <br></br>
        <br></br>
        <Routes>
        {/* The following block forced the route / to go to another route by default*/}
        {/* <Route
            path="/"
            element={<Navigate to="/estudiantes" replace />}
          /> */}
                  <Route path="/" element={<></>}
          />
          <Route
            path="/estudiantes"
            element={
              <ListaEstudiantes
                setFiltro={setFiltro}
                filtro={filtro}
                listafiltrada={listafiltrada}
              />
            }
          />
          <Route
            path="/formulario"
            element={
              <>
                <button className="btn btn-primary" onClick={() => setShowform(!showform)}>
                  {showform ? 'Ocultar formulario' : 'Mostrar Formulario'}
                </button>
                {showform && <Formulario agregarEstudiante={agregarEstudiante} />}
              </>
            }
          />
          <Route path='/estudiantes/:id' element={<DetalleEstudiante estudiantes={estudiantes}/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
