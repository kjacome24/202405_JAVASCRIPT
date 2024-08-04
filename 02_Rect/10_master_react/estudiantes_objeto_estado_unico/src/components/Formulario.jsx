import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";

const Formulario = (props)=> {
    const [estado, setEstado] = useState({
        nombre: "",
        apellido: "",
        edad: 0,
        errorFormulario: ""
    })

    const actualizarEstado = (e)=> {
        setEstado({...estado,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const agregar = (e)=>{
        e.preventDefault();
        if (!estado.nombre || !estado.apellido || !estado.edad) {
            setEstado({...estado,errorFormulario: "Por favor, completa todos los campos." })
            return;
        }
        props.agregarEstudiante(estado);
        setEstado({
            nombre: "",
            apellido: "",
            edad: 0,
            errorFormulario: ""
        })
        navigate("/estudiantes")
    }
    
    /*Use of ref */
    const nombreInputRef = useRef(null);
    useEffect(() => {
        nombreInputRef.current.focus();
    }, []);
    /* */

    return (
        <form className="form-control" onSubmit={(e)=> agregar(e)}>
            {estado.errorFormulario && <p style={{ color: 'red' }}>{estado.errorFormulario}</p>}
            <div>
                <label className="form-control" htmlFor="nombre"> Nombre: </label>
                <input className="form-control" type="text" id='nombre' name='nombre' value={estado.nombre} onChange={(e) => actualizarEstado(e) } ref={nombreInputRef}/>
                
            </div>
            <div>
                <label className="form-control" htmlFor="apellido">Apellido: </label>
                <input className="form-control" type="text" id='apellido' name='apellido' value={estado.apellido} onChange={(e) => actualizarEstado(e)}/>
            </div>
            <div>
                <label className="form-control" htmlFor="edad">Edad: </label>
                <input className="form-control" type="number" id='edad' name='edad'  value={estado.edad} onChange={(e) => actualizarEstado(e)}/>
            </div>
            <button type="submit" className="btn btn-warning" >
                Agregar
            </button>
        </form>
    );
}

export default Formulario;