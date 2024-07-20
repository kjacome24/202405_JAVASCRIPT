
import styles from '../css/TarjetaProducto.module.css';
import React, { useState } from "react";


const TarjetaProducto2 = (props) => {
    const {nombreProducto, precio, descripcion, enStock} = props;
    const [isHovered, setIsHovered] = useState(false);
    const agregarEstudiante = (input) => {
        console.log(`You clicked on ${input}`)
    }

    return (
        <div className={`card bg-light shadow-sm  ${styles.tarjetaProducto} 
        ${isHovered ? 'shadow-lg' : ''}
        `}
        style={{ margin: '10px', transition: 'transform 0.2s, box-shadow 0.2s' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <h4>{nombreProducto}</h4>
            <p>$ {precio}</p>
            <p>{descripcion}</p>
            {enStock===true? <p className={styles.enStock}>En stock</p>:<p className={styles.soldOut}>Agotado</p>}
            <button className="btn btn-primary" onClick={() => agregarEstudiante(nombreProducto)}>
                Comprar
            </button>
        </div>
    )
}


export default TarjetaProducto2;