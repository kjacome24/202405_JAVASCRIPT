import AppContext from "../context/AppContext";
import { useContext } from "react";
import Hijo from "./Hijo";

const Padre = () => {
    const contexto = useContext(AppContext);

    return (
        <>
        <h3>Componente padre</h3>
        <button onClick={()=> contexto.setMensaje("El ultimo fue el Padre")}>clic</button>
        <Hijo />
        </>
    );
}

export default Padre;