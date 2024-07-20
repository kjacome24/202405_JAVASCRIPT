import { useState } from "react";

const Destino = (props) => {
    const {lugar, impuesto} = props;
    const [costoActividad, setCostoActividad] = useState(0);

    const calcularCostoFinal = (costo) => {
        let impuestoAplicado = costo * impuesto;
        setCostoActividad(Number(costo) + impuestoAplicado);
    };

    return (
        <>
        <h4>{lugar}</h4>
        <input type="number" onChange={(e) => calcularCostoFinal(e.target.value)} />
        <p>Costo en {lugar}: ${costoActividad.toFixed(2)}</p>
        </>
    );
}

export default Destino;
