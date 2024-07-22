import React, { useState } from 'react';
import styles from '../css/Formulario_validation_style.module.css'


const Formulario_validation_style = () => {
    const [nombre, setNombre] = useState("");
    const [errorNombre, setErrorNombre] = useState(true);

    const manejarCambioNombre = (evento) => {
        const valor = evento.target.value;
        setNombre(valor);

        // Validamos si el nombre está vacío
        setErrorNombre(valor === "");
    };

    return (
        <div>
            <h2>Formulario</h2>
            <div className="campo">
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={manejarCambioNombre}
                    className={errorNombre ? styles.error : ""}
                />
                {errorNombre && <p className="mensaje-error">Por favor, introduce tu nombre.</p>}
            </div>
        </div>
    );
};

export default Formulario_validation_style;