// App.jsx

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaEstudiantes from './components/ListaEstudiantes';
import Formulario from './components/Formulario';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { nombre: "Arturo", apellido: "Duque", edad: 21 },
    { nombre: "Milena", apellido: "Neira", edad: 41 },
    { nombre: "Andrea", apellido: "Sira", edad: 51 }
  ]);

  const [filtro, setFiltro] = useState("");
  const [showform, setShowform] = useState(false);

  const agregarEstudiante = (nombre, apellido, edad) => {
    const newEstudiante = { nombre, apellido, edad };
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
        </Routes>
      </div>
    </div>
  );
}

export default App;

