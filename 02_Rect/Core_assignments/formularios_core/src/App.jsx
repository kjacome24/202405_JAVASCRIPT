import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import SupForm from './components/SupForm';
import Card_Sup from './components/Card_Sup';

function App() {
  const [sup_list,setSup_list] = useState([]);

  const add_sup = (name, lastname, email, password) => {
    const new_sup = { name: name, lastname: lastname, email: email, password: password}
    const new_sup_list = [...sup_list, new_sup]
    setSup_list(new_sup_list) 
  }

  return (
    <>
      <h1>Bienvenido a la liga de Superheroes</h1>
      <br></br>
      {/* Sups form */}
      < SupForm add_sup={add_sup}/>
      <img src="../src/img/SuperHeroe.png" alt="Super_img" />
      {/* Registered sups */}
      {sup_list[0] && 
        <div className='card text-white bg-success mb-3'>
          <h3>Added sups:</h3>
          {sup_list.map((sup,index) => (< Card_Sup {...sup} key={index}/>))}
        </div>}


    </>
  )
}

export default App
