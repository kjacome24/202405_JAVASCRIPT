import { useEffect } from "react";
import axios from 'axios';

const ApiSongs = ({dataAPISongs, setDataAPISongs})=>{
    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        console.log(dataAPISongs)
    },[dataAPISongs])

    const getData =   ()=> {
        const url ='http://localhost:8080/api/songs/';
        axios(url).then(
            response => {
                setDataAPISongs(prevState => ({
                    ...prevState,
                    arrayAPISongs: response.data
                }))
            }
                
        ).catch(
            error => {
            console.log("Error al traer info:", error);
            setDataAPISongs({...dataAPISongs,errorAPISongs: error});
        }
        ).finally(
            ()=>{
    
            })};
}

export default ApiSongs;