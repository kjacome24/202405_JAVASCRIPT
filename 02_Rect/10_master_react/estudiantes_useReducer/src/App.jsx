// App.jsx

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaEstudiantes from './components/ListaEstudiantes';
import Formulario from './components/Formulario';
import DetalleEstudiante from './components/DetalleEstudiante'
import { useState, useReducer } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import NotFound from './components/NoEncontrado'
import AppReducer from './reducers/AppReducer'

function App() {
  ////THis is for use reducer
  const estadoReducer = {
    estudiantes : [
      { nombre: "Arturo", apellido: "Duque", edad: 21, id: 1 },
      { nombre: "Milena", apellido: "Neira", edad: 41, id: 2 },
      { nombre: "Andrea", apellido: "Sira", edad: 51, id: 3 }
    ],
    showform: false,
    filtro: ""
  };

  const [estado, dispatcher] = useReducer(AppReducer, estadoReducer)

/////


  const agregarEstudiante = (input) => {
    const {nombre, apellido, edad} = input;
    const newEstudiante = { nombre, apellido, edad, id: estado.estudiantes.length +1 };
    dispatcher({tipo:"AGREGAR_USUARIO", datos: newEstudiante });
  };

  const listafiltrada = estado.estudiantes.filter(estudiante =>
    estudiante.nombre.toLowerCase().includes(estado.filtro.toLowerCase())
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
          <Route path="/" element={<></>}/>
          <Route
            path="/estudiantes"
            element={
              <ListaEstudiantes
                dispatcher={dispatcher}
                filtro={estado.filtro}
                listafiltrada={listafiltrada}
              />
            }
          />
          <Route
            path="/formulario"
            element={
              <>
                <button className="btn btn-primary" onClick={() => dispatcher({tipo:"SHOW_FORM"})}>
                  {estado.showform ? 'Ocultar formulario' : 'Mostrar Formulario'}
                </button>
                {estado.showform && <Formulario agregarEstudiante={agregarEstudiante} />}
              </>
            }
          />
          <Route path='/estudiantes/:id' element={<DetalleEstudiante estudiantes={estado.estudiantes}/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
