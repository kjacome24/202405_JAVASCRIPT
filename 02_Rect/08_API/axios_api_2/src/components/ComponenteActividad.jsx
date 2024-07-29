import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComponenteActividad = () => {
  const [actividad, setActividad] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const maxPokemonId = 898;
  const randomId = Math.floor(Math.random() * maxPokemonId) + 1;

  const obtenerActividad = async () => {
    setCargando(true);

    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    axios(url).then(response => {
      setActividad(response.data.name)
      setError(null);
    }
    ).catch(error => {
      setError('Error al obtener la actividad. Inténtalo de nuevo.');
    }).finally(() =>setCargando(false))


    // try {
    //   const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    //   console.log(respuesta)
    //   setActividad(respuesta.data.name);
    //   setError(null);
    // } catch (error) {
    //   setError('Error al obtener la actividad. Inténtalo de nuevo.');
    // } finally {
      
    // }
  };

  useEffect(() => {
    obtenerActividad();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Actividad Aleatoria</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{actividad}</p>
      )}
      <button onClick={obtenerActividad} disabled={cargando} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {cargando ? 'Cargando...' : 'Obtener Nueva Actividad'}
      </button>
    </div>
  );
};

export default ComponenteActividad;