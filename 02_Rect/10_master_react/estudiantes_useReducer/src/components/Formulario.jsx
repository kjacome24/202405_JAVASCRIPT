import { useReducer } from "react";
import {useNavigate } from "react-router-dom";
import FormularioReducer from '../reducers/FormularioReducer'

const Formulario = (props)=> {
////Using UseReducer
    const estadoReducer = {
        nombre: "",
        apellido: "",
        edad: 0,
        errorFormulario: ""
    };

    const [estado, dispatcher] = useReducer(FormularioReducer, estadoReducer)
////


    const navigate = useNavigate();

    const agregar = (e)=>{
        e.preventDefault();
        if (!estado.nombre || !estado.apellido || !estado.edad) {
            dispatcher({tipo:"SET_ERROR"})
            return;
        }
        props.agregarEstudiante(estado);
        dispatcher({
            tipo: "RESET_FORM"
        })
        navigate("/estudiantes")
    }
    
    return (
        <form className="form-control" onSubmit={(e)=> agregar(e)}>
            {estado.errorFormulario && <p style={{ color: 'red' }}>{estado.errorFormulario}</p>}
            <div>
                <label className="form-control" htmlFor="nombre"> Nombre: </label>
                <input className="form-control" type="text" id='nombre' name='nombre' value={estado.nombre} onChange={(e) => dispatcher({tipo: "ACTUALIZARESTADO", objeto:e}) } />
                
            </div>
            <div>
                <label className="form-control" htmlFor="apellido">Apellido: </label>
                <input className="form-control" type="text" id='apellido' name='apellido' value={estado.apellido} onChange={(e) => dispatcher({tipo: "ACTUALIZARESTADO", objeto:e})}/>
            </div>
            <div>
                <label className="form-control" htmlFor="edad">Edad: </label>
                <input className="form-control" type="number" id='edad' name='edad'  value={estado.edad} onChange={(e) => dispatcher({tipo: "ACTUALIZARESTADO", objeto:e})}/>
            </div>
            <button type="submit" className="btn btn-warning" >
                Agregar
            </button>
        </form>
    );
}

export default Formulario;