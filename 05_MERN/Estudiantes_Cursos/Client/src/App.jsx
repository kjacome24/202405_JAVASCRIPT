import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Encabezado from './components/Encabezado';
import PieDePagina from './components/PieDePagina';

function App() {
  const [error, setError] = useState(null);
  const [arregloApi,setArregloApi]= useState({});

  useEffect(
    ()=> {
      getData();
    }
  ,[])

  useEffect(
    ()=> {
      
      console.log(arregloApi)
    }
  ,[arregloApi])

    const getData =   ()=> {
      const url ='http://localhost:8000/api/estudiantes/';
      axios(url).then(
        response => {
          setArregloApi(response.data);}
      ).catch(
        error => {
          console.log("Error al traer info:", error);
          setError(error);
      }
      ).finally(
        ()=>{

        }
      )
    }

  return (
    <>
      < Encabezado />
      <div className='contenido'>
      </div>
      < PieDePagina />
    </>
  )
}

export default App
