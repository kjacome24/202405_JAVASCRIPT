import React from 'react';
import './App.css';
import TarjetaProducto from './components/TarjetaProducto';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
const productos = [
  {nombreProducto : "Laptop",
    precio: 1500,
    descripcion: "Una potente Laptop para trabajar y jugar",
    enStock: 10},
  {nombreProducto : "SmartPhone",
    precio: 800,
    descripcion: "Un Smartphone de ultima generacion",
    enStock: 0},
  {nombreProducto : "Auriculares",
    precio: 200,
    descripcion: "Auriculares con cancelacion de ruido",
    enStock: 15},
  {nombreProducto : "Monitor",
    precio: 300,
    descripcion: "Monitor 4k para un gran experiencia visual",
    enStock: 5}
]
  return (
    <>
    <h1 className='title'>TechStore - Tu Destino para la Mejor Tecnologia</h1>
    <div className='app'>
      
      {productos.map((producto,index)=>{
        return (<TarjetaProducto className='tarjetaProducto' {...producto}/>)
      })}
            
    </div>
    </>
  )
}

export default App
