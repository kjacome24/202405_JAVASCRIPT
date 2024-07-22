import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiComponente from './components/MiComponente';
import ContadorDeClicks from './components/ContadorDeClicks';
import ClockEffect from './components/ClockEffect';
import Estudiante from './components/Estudiante';
import { useState } from 'react';

function App() {
  const estudiantes0 = [
    { nombre: "Arturo", apellido: "Duque", edad: 21 },
    { nombre: "Milena", apellido: "Neira", edad: 41 },
    { nombre: "Andrea", apellido: "Sira", edad: 51 }
  ];
  const [estudiantes, setEstudiantes] = useState(estudiantes0);
  const agregarEstudiante = (nombre, apellido, edad) => {
    const new_estudiante = {
      nombre, apellido, edad
    };
    setEstudiantes([...estudiantes, new_estudiante]);
  };

  return (
    <div className='main'>
      <div className='flex-item'>
        <MiComponente />
      </div>

      <div className='flex-item'>
        <ContadorDeClicks />
      </div>

      <div className='flex-item'>
        <ClockEffect />
      </div>

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
          <button className="btn btn-primary" onClick={() => agregarEstudiante("Roberto", "Gonzales", 21)}>Add student</button>
        </div>
      </div>

    </div>
  );
}

export default App;
