import { useParams, Link } from "react-router-dom";
import Tarjeta from "../components/Tarjeta";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import NoEncontrado from '../components/NoEncontrado'

const ApiRick = () => {
    const [error, setError] = useState(null);
    const [arregloApi,setArregloApi]= useState({});
    const [arregloResidentes,setarregloResidentes] = useState([{}]);
    const params = useParams();
    const id = Number(params.id); 
    const recurso = params.recurso;

    useEffect(
        ()=> {
            setError(null)
            getData();
            console.log(arregloApi);
        }
    ,[id,recurso]);

    console.log(id,recurso)
    
    
    const getData =  ()=>{
    const url= `https://rickandmortyapi.com/api/${recurso}/${id}`;
    axios(url).then( response => {
        setArregloApi(response.data);

        if (recurso === "location") {
            obtenerResidentes(response.data.residents);
        } else if (recurso === "episode") {
            obtenerResidentes(response.data.characters);
        }



    }
    ).catch(
        error => {
            console.log("Error al traer info:", error);
            setError(error);
        }
    ).finally(
        ()=>{

        }
    )}

    const obtenerResidentes = (residentes) => {
        setarregloResidentes([]); // Clear the state before adding new residents
        let listado_residentes = [];
    
        residentes.forEach(residentUrl => {
            axios(residentUrl)
                .then(response => {
                    listado_residentes = [...listado_residentes, response.data];
                    setarregloResidentes(listado_residentes); // Update state within the promise
                })
                .catch(error => {
                    console.log("Error al traer info del residente:", error);
                });
        });
    };
    

    if (error) {
        return(
            <NoEncontrado/>
        );
    } else {
        
    }

    return(
        <Tarjeta {...arregloApi} recurso={recurso} arregloResidentes={arregloResidentes}/>
    );
}

export default ApiRick;