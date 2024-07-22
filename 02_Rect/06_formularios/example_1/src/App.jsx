import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Estudiante from './components/Estudiante';
import Formulario from './components/Formulario';

import FormularioRef from './components/FormularioRef'
import FormularioViaje from './components/FormularioViaje';
import Formulario_validation_style from './components/Formulario_validation_style';

function App() {
  const estudiantes0 = [
    { nombre: "Arturo", apellido: "Duque", edad: 21 },
    { nombre: "Milena", apellido: "Neira", edad: 41 },
    { nombre: "Andrea", apellido: "Sira", edad: 51 }
  ];

  const [estudiantes, setEstudiantes] = useState(estudiantes0);
  const [showform, setShowform] = useState(false);

  const agregarEstudiante = (nombre,apellido,edad) => {
    const new_estudent = {
      nombre, apellido, edad
    }
    setEstudiantes([...estudiantes, new_estudent])
  }


  return (
    <div className='main'>
      <div className='flex-item'>
      <div className='estudiantes'>
          {estudiantes.map((estudiante, index) => (
            <Estudiante 
              key={index}
              nombre={estudiante.nombre}
              apellido={estudiante.apellido}
              edad={estudiante.edad}
            />
          ))}
          <button className="btn btn-primary" onClick={() => setShowform(!showform)}>{showform? 'Ocultar formulario':'Mostrar Formulario'}</button>
          {showform && <Formulario agregarEstudiante={agregarEstudiante}/>}
        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>
            <FormularioRef />
        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>
          <FormularioViaje />
        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>
          <Formulario_validation_style />
        </div>
      </div>
    </div>

  )
}

export default App
