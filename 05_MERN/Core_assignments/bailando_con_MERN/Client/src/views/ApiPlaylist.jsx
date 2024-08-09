import { useEffect } from "react";
import axios from 'axios';

const ApiPlaylist = ({dataAPISongs, setDataAPISongs})=>{
    useEffect(()=>{
        getData();
    },[])

    const getData =   ()=> {
        const url ='http://localhost:8080/api/playlists/';
        axios(url).then(
            response => {
                console.log(response.data);
                setDataAPISongs(prevState => ({
                    ...prevState,
                    arrayAPIPlaylists: response.data
                }))
            }
        ).catch(
            error => {
            console.log("Error al traer info:", error);
            setDataAPISongs({...dataAPISongs,errorAPIPlaylists: error});
        }
        ).finally(
            ()=>{
                
            })};
}

export default ApiPlaylist;