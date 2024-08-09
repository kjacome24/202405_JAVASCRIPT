import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import TarjetaEstudiante from "../components/TarjetaEstudiante";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const ApiUnEstudiante = ({dataAPIEstudiantes, setDataAPIEstudiantes})=>{
    const navigate = useNavigate();
    const parametros = useParams();
    const email = parametros.email; 
    const [dataAPIEstudiante, setDataAPIEstudiante] = useState({
        dataApiEstudiantes: {
            nombre: "",
            apellido:"",
            cursos: [],
            email:""
        },
        errorApiEstudiante: null
    })

    useEffect(
        ()=> {
            setDataAPIEstudiante({...dataAPIEstudiante,errorApiEstudiante:null})
            getData();

        }
    ,[email]);

    const getData =  ()=>{
        const url= `http://localhost:8000/api/estudiantes/${email}`;
        axios(url).then( response => {
            setDataAPIEstudiante({...dataAPIEstudiante,dataApiEstudiantes:response.data})
            }
        ).catch(
            error => {
                console.log("Error al traer info:", error);

                setDataAPIEstudiante({...dataAPIEstudiante,errorApiEstudiante: error})
            }
        ).finally(
            ()=>{
            }
        )};

    const eliminarEstudiante = ()=> {
        const indice = dataAPIEstudiantes.arregloApiEstudiantes.findIndex((estudiante)=>estudiante.email===email);
        const nuevaLista = dataAPIEstudiantes.arregloApiEstudiantes;
        nuevaLista.splice(indice,1);
        axios.delete(`http://localhost:8000/api/estudiantes/${email}`).then(
            (respuesta)=>{
                setDataAPIEstudiantes({...dataAPIEstudiantes, arregloApiEstudiantes: nuevaLista});
                navigate("/estudiantes")
            }
        ).catch(
            error => {
                console.log( error);
                setDataAPIEstudiantes({ ...dataAPIEstudiantes, errorApiEstudiantes: "Error al eliminar el estudiante." });
            })
        };

    return(
        <>

            <TarjetaEstudiante {...dataAPIEstudiante.dataApiEstudiantes} eliminarEstudiante={eliminarEstudiante} />
        </>
    );
}

export default ApiUnEstudiante;