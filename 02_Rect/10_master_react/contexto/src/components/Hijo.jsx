import AppContext from "../context/AppContext";
import { useContext } from "react";


const Hijo = () => {
    const contexto = useContext(AppContext);

    const actualizar_mensaje = ()=> {
        contexto.setMensaje("El ultimo fue el hijo")
    }

    return (
        <>
            <h4>Componente hijo</h4>
            <button onClick={actualizar_mensaje}>clic</button>
            <p>{contexto.mensaje}</p>
        </>
    );
}

export default Hijo;