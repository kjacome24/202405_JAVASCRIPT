import React, { useState } from 'react';

const MapFilter = () => {
    const listaOriginal = ["cebollitas", "tomillo", "champiñones cremini", "mantequilla"];
    const [listaDeCompras, setListaDeCompras] = useState(listaOriginal);
    const [input, setInput] = useState("")
    
    const manejarFiltro = () => {
        const listaFiltrada = listaOriginal.filter((producto, indice) => producto.includes(`${input}`));
        setListaDeCompras(listaFiltrada);
    }

return (
    <div>
        <h2>Lista de compras</h2>
        <ul>
        {listaDeCompras.map(producto => (
            <li >{producto}</li>
        ))}
        </ul>
        <input type='text' value={input} onChange={(e=>setInput(e.target.value))}/>
        <button className="btn btn-primary" onClick={manejarFiltro}>Click</button>
    </div>
);
};

export default MapFilter;