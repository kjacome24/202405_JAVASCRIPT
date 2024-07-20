import React from 'react';
import './App.css';
import Estudiante from '../Estudiante/Estudiante';

function App() {
const estudiantes = [{nombre: "Arturo", apellido: "Duque", edad:21},{nombre: "Milena", apellido: "Neira", edad:41},{nombre: "Andrea", apellido: "Sira", edad:51}];


  return (
    <>
      <h1>Propiedades</h1>
      <Estudiante nombre="Kevin" apellido="Jacome" edad="34" />
      <Estudiante nombre="Carlos" apellido="Jacome" edad="24" />
      {estudiantes.map((estudiante,index) => {return < Estudiante key={index} 
                                                      nombre={estudiante.nombre} 
                                                      apellido={estudiante.apellido} 
                                                      edad={estudiante.edad} /> })}
    </>
  )
}

export default App
