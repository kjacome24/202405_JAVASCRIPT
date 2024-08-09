import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";
import styles from '../css/Formulario.module.css';
import axios from "axios";

const Formulario = ({setDataAPIEstudiantes,dataAPIEstudiantes})=> {
    const [estado, setEstado] = useState({
        nombre: "",
        apellido: "",
        email: "",
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
        if (!estado.nombre || !estado.apellido || !estado.email) {
            setEstado({...estado,errorFormulario: "Por favor, completa todos los campos." })
            return;
        }
        /// Here we goota bring the function to add info to BD
        axios.post("http://localhost:8000/api/estudiantes/nuevo",estado).then(
            (respuesta)=> {
                setDataAPIEstudiantes({...dataAPIEstudiantes, arregloApiEstudiantes: [...dataAPIEstudiantes.arregloApiEstudiantes, estado ]})
            }
        ).catch(
            error => {
                console.log( error);
                setEstado({ ...estado, errorFormulario: "Error al agregar el estudiante. Intenta de nuevo." });
            }
        );


        setEstado({
            nombre: "",
            apellido: "",
            email: "",
            errorFormulario: ""
        })
        navigate("/estudiantes")
    }
    
    return (
        <div className={styles.formulario}>
            <form className="form-control" onSubmit={(e)=> agregar(e)}>
                {estado.errorFormulario && <p style={{ color: 'red' }}>{estado.errorFormulario}</p>}
                <div>
                    <label className="form-control" htmlFor="nombre"> Nombre: </label>
                    <input className="form-control" type="text" id='nombre' name='nombre' value={estado.nombre} onChange={(e) => actualizarEstado(e) } />
                    
                </div>
                <div>
                    <label className="form-control" htmlFor="apellido">Apellido: </label>
                    <input className="form-control" type="text" id='apellido' name='apellido' value={estado.apellido} onChange={(e) => actualizarEstado(e)}/>
                </div>
                <div>
                    <label className="form-control" htmlFor="edad">email: </label>
                    <input className="form-control" type="email" id='email' name='email'  value={estado.email} onChange={(e) => actualizarEstado(e)}/>
                </div>
                <button type="submit" className="btn btn-warning" >
                    Agregar
                </button>
            </form>
        </div>

    );
}

export default Formulario;