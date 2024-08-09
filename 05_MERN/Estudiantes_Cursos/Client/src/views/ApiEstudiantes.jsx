import React, {useEffect} from "react";
import axios from 'axios';

const ApiEstudiantes = ({setDataAPIEstudiantes, dataAPIEstudiantes})=> {

    useEffect( ()=> {
        getData();
        },[])
    
    const getData =   ()=> {
        const url ='http://localhost:8000/api/estudiantes/';
        axios(url).then(
            response => {
            setDataAPIEstudiantes({...dataAPIEstudiantes, arregloApiEstudiantes: response.data})}
        ).catch(
            error => {
            console.log("Error al traer info:", error);
            setDataAPIEstudiantes({...dataAPIEstudiantes,errorApiEstudiantes: error});
        }
        ).finally(
            ()=>{
    
            })};
} 

export default ApiEstudiantes;