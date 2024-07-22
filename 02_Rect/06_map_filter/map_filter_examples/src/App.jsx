import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaDeTareas from './components/ListaDeTareas';
import Estudiante from './components/Estudiante';
import Formulario from './components/Formulario';
import { useState } from 'react';
import FiltrarEstudiantes from './components/FiltrarEstudiantes';

function App() {
  const estudiantes0 = [
    { nombre: "Arturo", apellido: "Duque", edad: 21 },
    { nombre: "Milena", apellido: "Neira", edad: 41 },
    { nombre: "Andrea", apellido: "Sira", edad: 51 }
  ];

  const [estudiantes, setEstudiantes] = useState(estudiantes0);
  const [showform, setShowform] = useState(false);
  const [ListaEstudiantesFiltrados, setListaEstudiantesFiltrados] = useState(estudiantes);


  const agregarEstudiante = (nombre,apellido,edad) => {
    const new_estudent = {
      nombre, apellido, edad
    }
    const new_list = [...estudiantes, new_estudent];
    setEstudiantes(new_list);
    setListaEstudiantesFiltrados(new_list);


  };


  return (
    <div className='main'>
      <div className='flex-item'>
        <div className='div1'>
          < ListaDeTareas />
        </div>
      </div>

      <div className='flex-item'>
        < FiltrarEstudiantes ListaEstudiantesFiltrados={estudiantes} setListaEstudiantesFiltrados={setListaEstudiantesFiltrados} />
        <div className='estudiantes'>
        {ListaEstudiantesFiltrados.map((estudiante, index) => (
            <Estudiante key={index}
              {...estudiante}
            />
          ))}
          <button className="btn btn-primary" onClick={() => setShowform(!showform)}>{showform? 'Ocultar formulario':'Mostrar Formulario'}</button>
          {showform && <Formulario agregarEstudiante={agregarEstudiante}/>}
        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>

        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>

        </div>
      </div>
    </div>

  )
}

export default App

