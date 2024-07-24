import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormCard from './components/FormCard';
import Cards from './components/Cards'

function App() {


  const [arrayBoxes, setArrayBoxes] = useState([])

  const addingBoxes = (title,content,color,border) => {
    const newBox = {title : title, content: content, color: color, border:border};
    const newArray = [...arrayBoxes, newBox]
    setArrayBoxes(newArray)
  }

  const removeBoxes = (index)=>{
    const newArray = arrayBoxes.filter((array,i)=> i !== index);
    setArrayBoxes(newArray)

  }

  return (
    <>
      <h1>Generador de Tarjetas</h1>
      <div className='card2'>
      <FormCard addingBoxes={addingBoxes}/>
      </div>
      <Cards removeBoxes={removeBoxes} arrayBoxes={arrayBoxes}>
      {/* THis is to pass content to the children */}
        {/* <p>this is a children</p> */}
        </Cards>

    </>
  )
}

export default App
