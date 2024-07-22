import { useState } from "react";

const ContadorDeClicks = () => {
    const [clicks,setClicks] = useState(0);

    const incrementarClicks = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className="card">
            <p>Has hecho clic {clicks} veces!</p>
            <button className="btn btn-primary" onClick={incrementarClicks}>Haz clic aqui!</button>
        </div>
    );
}

export default ContadorDeClicks;