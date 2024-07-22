import React, { useState, useEffect } from 'react';

const Reloj = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("Componente Reloj montado");
    const intervalo = setInterval(() => {
        console.log("Intervalo ejecutado");
        setHora(new Date().toLocaleTimeString());
    }, 1000);
    
    // Esta función se ejecuta cuando el componente se desmonta
    return () => {
        clearInterval(intervalo);
        console.log("El componente Reloj se ha desmontado");
    };
}, []);

    return (
    <div>
        <p>Hora actual: {hora}</p>
    </div>
    );
}

const ClockEffect = () => {
    const [mostrarReloj, setMostrarReloj] = useState(true);
    
    return (
    <div className='card'>
        <button onClick={() => setMostrarReloj(!mostrarReloj)}>
            {mostrarReloj ? "Ocultar Reloj" : "Mostrar Reloj"}
        </button>
        {mostrarReloj && <Reloj />}
    </div>
);
}

export default ClockEffect;