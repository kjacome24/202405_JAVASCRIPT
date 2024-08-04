import React from 'react';
import ResourceForm from './components/ResourceForm';


const App = () => (
  <div className="app">  {/* Usa la clase CSS global */}
    <h1>Consulta la API de Rick y Morty</h1>
    <ResourceForm />
  </div>

);


export default App;