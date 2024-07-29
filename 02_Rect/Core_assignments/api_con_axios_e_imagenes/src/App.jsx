import { useState } from 'react';
import './App.css';
import Api_axios from './components/Api_axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image_card from './components/Image_card';

function App() {
  const [random_image, setRandom_image] = useState('https://i.gifer.com/DeRD.gif');

  
  return (
    <>
      <h2>Random Image</h2>
      <br></br>
      <Image_card random_image={random_image} />
      <br></br>
      <Api_axios setRandom_image={setRandom_image} />
    </>
  )
}

export default App
