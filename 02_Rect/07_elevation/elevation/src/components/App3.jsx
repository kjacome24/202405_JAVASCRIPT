import React, { useState } from 'react';

const App3 = () => {
    const [mensajeActual, setMensajeActual] = useState("No hay mensajes");

    const alNuevoMensaje = (nuevoMensaje) => {
    setMensajeActual(nuevoMensaje);
};

    return (
    <div>
        <FormularioMensaje alNuevoMensaje={alNuevoMensaje} />
        <VisualizacionMensaje mensajeActual={mensajeActual} />
    </div>
);
}

const FormularioMensaje = ({ alNuevoMensaje }) => {
    const [mensaje, setMensaje] = useState("");

    const manejarEnvio = (e) => {
    e.preventDefault();
    alNuevoMensaje(mensaje);
    setMensaje("");
};

    const manejarCambio = (e) => {
    setMensaje(e.target.value);
};

    return (
    <form onSubmit={manejarEnvio}>
        <input type="text" value={mensaje} onChange={manejarCambio} />
        <button type="submit">Enviar</button>
    </form>
    );
}

const VisualizacionMensaje = ({ mensajeActual }) => {
    return <p>{mensajeActual}</p>;
}

export default App3;