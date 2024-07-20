import React from 'react';
import './App.css';
import TarjetaProducto from './components/TarjetaProducto';
import 'bootstrap/dist/css/bootstrap.min.css';
import TarjetaProducto2 from './components/TarjetaProducto2';


function App() {
const productos = [
  {nombreProducto : "Laptop",
    precio: 1500,
    descripcion: "Una potente Laptop para trabajar y jugar",
    enStock: true},
  {nombreProducto : "SmartPhone",
    precio: 800,
    descripcion: "Un Smartphone de ultima generacion",
    enStock: false},
  {nombreProducto : "Auriculares",
    precio: 200,
    descripcion: "Auriculares con cancelacion de ruido",
    enStock: true},
  {nombreProducto : "Monitor",
    precio: 300,
    descripcion: "Monitor 4k para un gran experiencia visual",
    enStock: true}
]
  return (
    <>
    <div className='app'>
      {productos.map((producto,index)=>{
        return (<TarjetaProducto className='tarjetaProducto' key={index} nombreProducto={producto.nombreProducto} precio={producto.precio} descripcion={producto.descripcion} enStock={producto.enStock}/>)
      })}
            
    </div>
    <div className='app'>
      {productos.map((producto,index)=>{
        return (<TarjetaProducto2 className='tarjetaProducto' key={index} nombreProducto={producto.nombreProducto} precio={producto.precio} descripcion={producto.descripcion} enStock={producto.enStock}/>)
      })}
            
    </div>
    </>
  )
}

export default App
