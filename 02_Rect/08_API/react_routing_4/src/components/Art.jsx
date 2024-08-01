// components/Art.jsx


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/Art.module.css';
import mall from '../assets/Mall.jpg';
import salud from '../assets/CentroSalud.jpg';
import financiero from '../assets/CentroFinanciero.jpg';
import house from '../assets/House.jpg';
import transport from '../assets/MeansTransport.jpg';
import park from '../assets/ParqueDiversiones.jpg';
import show from '../assets/Show.jpg';
import drones from '../assets/TaxiDrones.jpg';


const artData = {
  1: {
    title: 'Fuera de Este Mundo',
    image: mall,
  },
  2: {
    title: 'Pacientes Holográficos',
    image: salud,
  },
  3: {
    title: 'Lo Alto del Dinero',
    image: financiero,
  },
  4: {
    title: 'Nada como la Privacidad del Hogar',
    image: house,
  },
  5: {
    title: 'Moverse en la Ciudad',
    image: transport,
  },
  6: {
    title: 'Diversión de Otro Planeta',
    image: park,
  },
  7: {
    title: 'Espectáculo de la Galaxia',
    image: show,
  },
  8: {
    title: 'Taxistas',
    image: drones,
  },
};


const Art = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const art = artData[id];


  const nextId = parseInt(id, 10) + 1;
  const prevId = parseInt(id, 10) - 1;


  if (!art) {
    return <div className={styles.artContainer}>Obra de Arte No Encontrada</div>;
  }


  return (
    <div className={styles.artContainer}>
      <h1>{art.title}</h1>
      <img src={art.image} alt={art.title} className={styles.artImage} />
      <div className={styles.navigationButtons}>
        {prevId >= 1 && <button onClick={() => navigate(`/art/${prevId}`)}>Anterior</button>}
        <button onClick={() => navigate('/home')}>Inicio</button>
        {nextId <= Object.keys(artData).length && <button onClick={() => navigate(`/art/${nextId}`)}>Siguiente</button>}
      </div>
    </div>
  );
};


export default Art;