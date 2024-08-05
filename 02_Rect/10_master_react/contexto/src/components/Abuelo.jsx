import AppContext from "../context/AppContext";
import { useContext } from "react";
import Padre from "./Padre";

const Abuelo = () => {
    const contexto = useContext(AppContext);
    return (
        <>
        <h2>Componente abuelo</h2>
        <button onClick={()=> contexto.setMensaje("El ultimo fue el Abuelo")}>clic</button>
        <Padre />
        </>
    );
}

export default Abuelo;