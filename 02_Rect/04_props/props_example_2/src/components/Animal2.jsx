///////////Using proptypes to definy the kind of props that a component should receive. 
import React from "react";
import PropTypes from 'prop-types';
import styles from '../css/Animal2.module.css'

const Animal = ({ especie, nombre, edad, atributos, juguetesFavoritos }) => {
    const { tamaño, color } = atributos;
    const [jugueteUno, jugueteDos, jugueteTres] = juguetesFavoritos;

    return (
    <div className={styles.new}>
        <h1>{nombre} - Edad: {edad}</h1>
        <h2>Dueño de la Mascota</h2>
        <p>{nombre}</p>
        <h3>Atributos de {nombre}</h3>
        <p>Tamaño: {tamaño}</p>
        <p>Color: {color}</p>
        <h4>Juguetes Favoritos de {nombre}</h4>
        <p>{jugueteUno}</p>
        <p>{jugueteDos}</p>
        <p>{jugueteTres}</p>
    </div>
    );
};

    Animal.propTypes = {
    especie: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    atributos: PropTypes.shape({
    tamaño: PropTypes.string,
    color: PropTypes.string
    }).isRequired,
    juguetesFavoritos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Animal;