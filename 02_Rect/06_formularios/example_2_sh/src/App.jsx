import React from 'react';
import SuperheroRegistrationForm from './components/SuperheroRegistrationForm';
import './index.css';  // Importando estilos globales


const App = () => {
  return (
    <div className="app-container">
      <h1>Bienvenido a la Liga de Superhéroes</h1>
      <SuperheroRegistrationForm />
    </div>
  );
};


export default App;
