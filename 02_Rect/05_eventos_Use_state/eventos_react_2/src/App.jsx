import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './components/Counter';
import Plants from './components/Plants';
import Destino from './components/Destino';
import AsyncCounter from './components/AsyncCounter';
import MiComponente from './components/MiComponente';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  const plantPropsArray = [
    {
        nombre: "Rose",
        especie: "Rosa",
        edad: "2 años",
        atributosPlanta: {
            altura: 50,
            tipoDeSuelo: "Bien drenado",
            color: "Rojo"
        },
        cuidadosFavoritos: ["Riego moderado", "Luz solar directa", "Suelo bien drenado"]
    },
    {
        nombre: "Tulip",
        especie: "Tulipa",
        edad: "1 año",
        atributosPlanta: {
            altura: 30,
            tipoDeSuelo: "Arenoso",
            color: "Amarillo"
        },
        cuidadosFavoritos: ["Riego frecuente", "Sombra parcial", "Suelo rico en nutrientes"]
    },
    {
        nombre: "Sunflower",
        especie: "Helianthus",
        edad: "6 meses",
        atributosPlanta: {
            altura: 150,
            tipoDeSuelo: "Franco",
            color: "Amarillo"
        },
        cuidadosFavoritos: ["Riego moderado", "Luz solar directa", "Suelo bien drenado"]
    },
    {
        nombre: "Cactus",
        especie: "Cactaceae",
        edad: "3 años",
        atributosPlanta: {
            altura: 20,
            tipoDeSuelo: "Arenoso",
            color: "Verde"
        },
        cuidadosFavoritos: ["Riego escaso", "Luz solar directa", "Suelo seco"]
    },
    {
        nombre: "Orchid",
        especie: "Orchidaceae",
        edad: "1 año",
        atributosPlanta: {
            altura: 40,
            tipoDeSuelo: "Suelo bien drenado",
            color: "Blanco"
        },
        cuidadosFavoritos: ["Riego moderado", "Sombra parcial", "Humedad alta"]
    }
];


  return (
    <div className='main'>
      <div className='flex-item'>
        <Counter />
      </div>

      <div className='flex-item'>
        <div className='plants'>
          {plantPropsArray.map((plant, index)=> {
          return (<Plants {...plant}/>)
        })}
        </div>


      </div>

      <div className='flex-item'>
      <Destino lugar="París" impuesto={0.1} />
      <Destino lugar="Tokio" impuesto={0.08} />
      <Destino lugar="Nueva York" impuesto={0.0925} />
      </div>

      <div className='flex-item'>
        <AsyncCounter />

      </div>

      <div className='flex-item'>
        <MiComponente />
      </div>
      <div className='flex-item'>
        <ListaDeTareas />  
      </div>

    </div>

  )
}

export default App
