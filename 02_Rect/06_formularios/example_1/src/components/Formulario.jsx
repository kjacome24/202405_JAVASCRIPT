import { useState, useEffect, useRef } from "react";

const Formulario = (props)=> {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);

    const agregar = (e)=>{
        e.preventDefault();
        props.agregarEstudiante(nombre,apellido,edad);
        setApellido("");
        setEdad(0);
        setNombre("")
    }
    
    /*Use of ref */
    const nombreInputRef = useRef(null);
    useEffect(() => {
        nombreInputRef.current.focus();
    }, []);
    /* */

    return (
        <form className="form-control" onSubmit={(e)=> agregar(e)}>
            <div>
                <label className="form-control" htmlFor="nombre"> Nombre: </label>
                <input className="form-control" type="text" id='nombre' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value) } ref={nombreInputRef}/>
                <p>{nombre}</p>
            </div>
            <div>
                <label className="form-control" htmlFor="apellido">Apellido: </label>
                <input className="form-control" type="text" id='apellido' name='apellido' value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
            </div>
            <div>
                <label className="form-control" htmlFor="edad">Edad: </label>
                <input className="form-control" type="number" id='edad' name='edad' edad={edad} value={edad} onChange={(e)=>setEdad(e.target.value)}/>
            </div>
            <button className="btn btn-warning" >
                Agregar
            </button>
        </form>
    );
}

export default Formulario;