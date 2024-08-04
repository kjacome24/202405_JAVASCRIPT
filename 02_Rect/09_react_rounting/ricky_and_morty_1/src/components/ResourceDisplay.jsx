import React, { useEffect, useState } from 'react';
import styles from '../css/ResourceDisplay.module.css';


const ResourceDisplay = ({ resource, data }) => {
  const [characterNames, setCharacterNames] = useState([]);
  const [residentNames, setResidentNames] = useState([]);


  useEffect(() => {
    if (resource === 'episode' && data.characters) {
      const fetchCharacterNames = async () => {
        try {
          const names = await Promise.all(
            data.characters.map(async (url) => {
              const response = await fetch(url);
              const characterData = await response.json();
              return characterData.name;
            })
          );
          setCharacterNames(names);
        } catch (error) {
          console.error('Error fetching character names:', error);
        }
      };


      fetchCharacterNames();
    }


    if (resource === 'location' && data.residents) {
      const fetchResidentNames = async () => {
        try {
          const names = await Promise.all(
            data.residents.map(async (url) => {
              const response = await fetch(url);
              const residentData = await response.json();
              return residentData.name;
            })
          );
          setResidentNames(names);
        } catch (error) {
          console.error('Error fetching resident names:', error);
        }
      };


      fetchResidentNames();
    }
  }, [resource, data]);


  if (!data) {
    return null;
  }


  return (
    <div className={styles.results}>
      <h2>Detalles del {resource.charAt(0).toUpperCase() + resource.slice(1)}</h2>
      {resource === 'character' && (
        <div>
          <h3>{data.name}</h3>
          <p>Estado: {data.status}</p>
          <p>Especie: {data.species}</p>
          <p>Género: {data.gender}</p>
          <img src={data.image} alt={data.name} />
        </div>
      )}
      {resource === 'episode' && (
        <div>
          <h3>{data.name}</h3>
          <p>Fecha de emisión: {data.air_date}</p>
          <p>Episodio: {data.episode}</p>
          <p>Personajes:</p>
          <ul>
            {characterNames.length > 0
              ? characterNames.map((name, index) => <li key={index}>{name}</li>)
              : data.characters.map((url) => <li key={url}>{url}</li>)
            }
          </ul>
        </div>
      )}
      {resource === 'location' && (
        <div>
          <h3>{data.name}</h3>
          <p>Tipo: {data.type}</p>
          <p>Dimensión: {data.dimension}</p>
          <p>Residentes:</p>
          <ul>
            {residentNames.length > 0
              ? residentNames.map((name, index) => <li key={index}>{name}</li>)
              : data.residents.map((url) => <li key={url}>{url}</li>)
            }
          </ul>
        </div>
      )}
    </div>
  );
};


export default ResourceDisplay;
