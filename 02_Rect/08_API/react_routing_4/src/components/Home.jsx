// components/Home.jsx


import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';


const artworks = [
  { name: 'Fuera de Este Mundo', path: '1' },
  { name: 'Pacientes Holográficos', path: '2' },
  { name: 'Lo Alto del Dinero', path: '3' },
  { name: 'Nada como la Privacidad del Hogar', path: '4' },
  { name: 'Moverse en la Ciudad', path: '5' },
  { name: 'Diversión de Otro Planeta', path: '6' },
  { name: 'Espectáculo de la Galaxia', path: '7' },
  { name: 'Taxistas', path: '8' },
];


const Home = () => (
  <div className={styles.homeContainer}>
    <h1 className={styles.title}>Bienvenido a la Galería de Arte Futurista</h1>
    <ul className={styles.artList}>
      {artworks.map((art) => (
        <li key={art.path} className={styles.artItem}>
          <Link to={`/art/${art.path}`} className={styles.artLink}>{art.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);


export default Home;