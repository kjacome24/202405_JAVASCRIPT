import { createContext } from "react";


const AppContext = createContext(
    {
        mensaje: "",
        setMensaje: () => {}
}
);

export default AppContext;