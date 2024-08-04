import React, { useState } from 'react';
import ResourceDisplay from './ResourceDisplay';
import styles from '../css/ResourceForm.module.css';


const ResourceForm = () => {
  const [resource, setResource] = useState('character');
  const [resourceId, setResourceId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);


  const handleFetch = async () => {
    setError(false);
    setData(null);
    try {
      console.log(`Buscando recurso: ${resource} con ID: ${resourceId}`);
      const response = await fetch(`https://rickandmortyapi.com/api/${resource}/${resourceId}`);
      if (!response.ok) {
        throw new Error('Recurso no encontrado');
      }
      const result = await response.json();
      console.log('Datos obtenidos:', result);
      setData(result);
    } catch (err) {
      console.error('Error en la búsqueda:', err);
      setError(true);
    }
  };


  const handleResourceChange = (e) => {
    setResource(e.target.value);
    setResourceId('');
    setData(null);
    setError(false);
  };


  return (
    <div>
      <div className={styles.controls}>
        <label htmlFor="resource-select">Recurso:</label>
        <select id="resource-select" name="resource" value={resource} onChange={handleResourceChange}>
          <option value="character">Personajes</option>
          <option value="episode">Episodios</option>
          <option value="location">Ubicaciones</option>
        </select>
        <label htmlFor="resource-id">ID:</label>
        <input
          id="resource-id"
          name="resourceId"
          type="number"
          value={resourceId}
          onChange={(e) => setResourceId(e.target.value)}
          placeholder="Introduce el ID"
        />
        <button onClick={handleFetch}>Consultar</button>
      </div>
      {error && (
        <div id="error-message" className={styles.errorMessage}>
          <p>Eso que buscas no existe</p>
          <img src="/Rick.jpg" alt="Rick" />
        </div>
      )}
      {data && <ResourceDisplay resource={resource} data={data} />}
    </div>
  );
};


export default ResourceForm;