import React, { useState } from 'react';

const MiComponente = () => {
    /* */
    const [valorInput, setValorInput] = useState("");
    const manejarEnvio = () => {
        alert("Formulario enviado!");
    };
    const manejarEnfoque = () => {
        alert("Elemento enfocado!");
    };


    const manejarCambio = (evento) => {
        setValorInput(evento.target.value);
    };

    const manejarDobleClick = (evento) => {
        console.log("Elemento doble clickeado:", evento.target);
    };
    /* */
    return (
        <>
            <div className="card" 
            // onMouseEnter={(evento)=> alert(`acabas de entrar al main div ${evento.target.className}`)  } onMouseLeave={(evento)=> alert(`acabas de salir al main div ${evento.target.className}`)  }
            >
                <form onSubmit={manejarEnvio}>
                    <button type="submit">Enviar</button>
                </form>
                <input id='inputtest' onFocus={(evento) => console.log(evento.target.value)} placeholder="Haz clic aqui.."></input>
                <input onChange={manejarCambio} placeholder="Escribe algo..." />
                
                <p>Valor del input: {valorInput}</p>
                <button onDoubleClick={manejarDobleClick }>hola</button>
            </div>
            

        </>
    );

}

export default MiComponente;