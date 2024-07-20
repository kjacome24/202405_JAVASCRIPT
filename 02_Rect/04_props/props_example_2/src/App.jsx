import React from 'react';
import './App.css';
import Animal from './components/Animal';
import Animal2 from './components/Animal2';



function App() {
  const animales = [
    { especie: "Canis lupus", nombre: "lucas" },
    { especie: "Panthera leo", nombre: "max" },
    { especie: "Elephas maximus", nombre: "dumbo" },
    { especie: "Gorilla beringei", nombre: "george" },
    { especie: "Panthera tigris", nombre: "tigger" }
  ];

  const animales2 = [
    {
      especie: "Canis lupus",
      nombre: "lucas",
      edad: 3,
      atributos: {
        tamaño: "grande",
        color: "gris"
      },
      juguetesFavoritos: ["pelota", "hueso", "cuerda"]
    },
    {
      especie: "Panthera leo",
      nombre: "max",
      edad: 5,
      atributos: {
        tamaño: "grande",
        color: "amarillo"
      },
      juguetesFavoritos: ["anillo", "caja", "pelota"]
    },
    {
      especie: "Elephas maximus",
      nombre: "dumbo",
      edad: 10,
      atributos: {
        tamaño: "enorme",
        color: "gris"
      },
      juguetesFavoritos: ["neumático", "cuerda", "bola gigante"]
    },
    {
      especie: "Gorilla beringei",
      nombre: "george",
      edad: 7,
      atributos: {
        tamaño: "grande",
        color: "negro"
      },
      juguetesFavoritos: ["caja", "ramas", "pelota"]
    },
    {
      especie: "Panthera tigris",
      nombre: "tigger",
      edad: 4,
      atributos: {
        tamaño: "grande",
        color: "naranja"
      },
      juguetesFavoritos: ["pelota", "cuerda", "anillo"]
    }
  ];

  return (
    <div className='app'>
      < Animal especie="Perro" nombre="Firulais" />
      < Animal especie="Gato" nombre="Garfield" />
      < Animal especie="Pajaro" nombre="Piolin" />
      {animales.map((animal,index)=>{return < Animal key={index} especie={animal.especie} nombre={animal.nombre}/>})}
      {animales2.map((animal,index)=> {return <Animal2 key={index} especie={animal.especie} nombre={animal.nombre} edad={animal.edad} atributos={animal.atributos} juguetesFavoritos={animal.juguetesFavoritos}/>})}
    </div>
  )
}

export default App
