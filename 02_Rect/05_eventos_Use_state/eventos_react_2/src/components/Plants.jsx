import { useState } from 'react';

const Plants = (props) => {
    const { nombre, especie, edad, atributosPlanta, cuidadosFavoritos } = props;
    const { altura, tipoDeSuelo, color } = atributosPlanta;
    const [cuidadoUno, cuidadoDos, cuidadoTres] = cuidadosFavoritos;
    const [alturaPlanta, setAlturaPlanta] = useState(altura);

    return (
    <div className='card'>
        <h4 style={{color:'blue'}}>{nombre}</h4>
        <p onClick={() => setAlturaPlanta(alturaPlanta + 10)}>
            Altura: {alturaPlanta} cm
        </p>    
    </div>);

}

export default Plants;