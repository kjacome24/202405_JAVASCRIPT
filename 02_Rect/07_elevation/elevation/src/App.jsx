import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import App2 from './components/App2';
import Formulario from './components/Formulario'
import App3 from './components/App3';
import App4 from './components/App4';

function App() {


  return (
    <div className='main'>
      <div className='flex-item'>
        <div className='div1'>
          < App2 />
        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>
          <Formulario />
        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>
          < App3 />
        </div>
      </div>

      <div className='flex-item'>
        <div className='div1'>
          <App4 />
        </div>
      </div>
    </div>

  )
}

export default App