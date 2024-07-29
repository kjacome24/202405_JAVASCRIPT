import { useState, useEffect } from 'react'

import './App.css'
import Api_cats from './components/Api_cats'
import axios from 'axios';

function App() {
  const [images,setImages] = useState([])
  const [trigger,setTrigger] = useState("False");
  const [counter,setCounter] =useState(0);



useEffect(()=>{
  setTrigger("False")
  console.log("Se cargaron nuevas imagenes");
  const obtenerImagenes = ()=> {    
            const url = "https://api.thecatapi.com/v1/images/search?limit=10";
            axios(url).then(response => {
              setImages(response.data)
            }
            ).catch(error => {
              console.error("Error fetching images:", error);
            })
            
            
            }
  obtenerImagenes();
},[trigger==="True"]) //if the array is empty the task will be completed just once when the page is first rendered. 






useEffect(()=>{
  console.log(`The counter is ${counter}`)
},[counter] //if the array is empty the task will be completed just once when the page is first rendered. 
)

  return (
    <>
    <Api_cats setTrigger={setTrigger} setCounter={setCounter} counter={counter} />
    <div className='boxes'>
      {images.map((image,index)=> 
        <img src={image.url} key={index} alt='Imgagen de gato'/>
    )}

    </div>
    </>
  )
}

export default App