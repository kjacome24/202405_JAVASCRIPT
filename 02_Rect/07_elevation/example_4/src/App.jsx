import React from 'react';
import Accordion from './components/Accordion';
import './App.css';


const App = () => {
  const items = [
    { label: 'Sección 1', content: 'Este es el contenido de la Sección 1' },
    { label: 'Sección 2', content: 'Este es el contenido de la Sección 2' },
    { label: 'Sección 3', content: 'Este es el contenido de la Sección 3' },
    { label: 'Sección 4', content: 'Este es el contenido de la Sección 4' },
    { label: 'Sección 5', content: 'Este es el contenido de la Sección 5' },
    { label: 'Sección 6', content: 'Este es el contenido de la Sección 6' },
    { label: 'Sección 7', content: 'Este es el contenido de la Sección 7' },
  ];


  return (
    <div>
      <h1>Acordeón de Secciones</h1>
      <Accordion items={items} />
    </div>
  );
};


export default App;