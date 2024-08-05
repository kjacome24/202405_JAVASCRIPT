import { useState } from "react"

const useContador = (valorInicial,valorAument,valorDecremento) =>{
    const [contador, setContador] = useState(valorInicial);

    const aumentarUnidades = ()=> {
        setContador(contador + valorAument);
    }

    const disminuirUnidades = () => {
        setContador(contador - valorDecremento);
    }

    return ([contador,aumentarUnidades,disminuirUnidades]);
}


export default useContador;
