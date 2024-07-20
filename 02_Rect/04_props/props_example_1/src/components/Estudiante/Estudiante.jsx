import React from "react";

const Estudiante = (props) => {
    return(
    <>
        <h2>Nombre: {props.nombre} {props.apellido} </h2>
        <p>Edad: {props.edad}</p>
    </>
    );
}

export default Estudiante;