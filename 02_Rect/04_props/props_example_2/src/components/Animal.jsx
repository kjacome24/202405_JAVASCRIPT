import React from "react";

const Animal = (props) =>{
const {especie , nombre} = props;

return (
    <div>
        <p>Especie: {especie} , Nombre: {nombre}</p>
    </div>
)

}


export default Animal;
