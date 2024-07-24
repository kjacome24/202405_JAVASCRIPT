import React, { useState } from 'react';

const App2 = () => {

    const [contador, setContador] = useState({counter1: 0, counter2:0});

    /*Async counter */
    const incrementarContador = () => {
    setContador(prev=>({...contador,counter1:prev.counter1+ 1 }));
    };

    const incrementarContador2 = () => {
        setContador(prev=>({...contador,counter2:prev.counter2+ 1 }));

        };


    return (
    <div>
        <MostrarContador contador={contador} />
        <BotonIncrementar onIncrement={incrementarContador} />
        <BotonIncrementar onIncrement={incrementarContador2} />
    </div>
    );
}

const MostrarContador = ({ contador }) => {
    const {counter1, counter2} = contador;
    return (
    <>
        <p>Contador 1: {counter1}</p>
        <p>Contador 2: {counter2}</p>
    </>) ;
}

const BotonIncrementar = ({ onIncrement }) => {
    return (
    <>
        <button onClick={onIncrement}>Incrementar</button>
    </>);
    
    
}

export default App2;