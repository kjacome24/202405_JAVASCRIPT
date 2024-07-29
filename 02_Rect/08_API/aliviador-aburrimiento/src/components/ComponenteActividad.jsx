import React, { useState } from 'react';

const ComponenteActividad = () => {
  const [actividad, setActividad] = useState('');
  const [cargando, setCargando] = useState(false);
  const maxPokemonId = 898;
  const randomId = Math.floor(Math.random() * maxPokemonId) + 1;

    const obtenerActividad = async () => {
    setCargando(true); // Indicamos que la carga está en progreso
  
    try {
      // Realizamos la solicitud a la API
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  
      // Esperamos a que la respuesta se convierta en JSON
      const datos = await respuesta.json();
        console.log(datos)
      // Establecemos la actividad en el estado
      setActividad(datos.name);
    } catch (error) {
      // Si hay un error, lo manejamos aquí
      console.error('Error al obtener la actividad:', error);
      setActividad('Fallo al obtener una actividad. Inténtalo de nuevo más tarde.');
    } finally {
      // Indicamos que la carga ha terminado
      setCargando(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Eliminador de Aburrimiento</h1>
      <button
        onClick={obtenerActividad}
        disabled={cargando}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {cargando ? 'Cargando...' : 'Obtener Actividad'}
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{actividad}</p>
    </div>
  );
};

export default ComponenteActividad;