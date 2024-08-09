import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import CardSong from '../components/CardSong';
import NotFound from '../components/NotFound';

const ApiOneSong = ({dataAPISongs, setDataAPISongs,filterSongs})=>{
    const navigate = useNavigate();
    const params = useParams();
    const title = params.title; 

    const [dataAPISong, setDataAPISong] = useState({
        dataApiOne: {
            title: "",
            artist:"",
            year: 0,
            genre:""
        },
        errorApiSong: null
    });

    useEffect(()=>{
        setDataAPISong({...dataAPISong, errorApiSong: null })
        getData();
    },[title])

    const getData =   ()=> {
        const url =`http://localhost:8080/api/songs/${title}`;
        axios(url).then(
            response => {
                setDataAPISong({...dataAPISong, dataApiOne: response.data})}
        ).catch(
            error => {
            console.log("Error al traer info:", error);
            setDataAPISong({...dataAPISong,errorApiSong: error});
        }
        )};


    const deleteSong = ()=>{

        axios.delete(`http://localhost:8080/api/songs/${title}`).then(
            (response)=>{
                const index = dataAPISongs.arrayAPISongs.findIndex((song)=> song.title===title);
                const newListSongs =  dataAPISongs.arrayAPISongs;
                newListSongs.splice(index,1);

                setDataAPISongs(prevState => ({
                    ...prevState,
                    arrayAPISongs: newListSongs,
                    songsfiltered: filterSongs(newListSongs, prevState.filterSongs)
                }));


                navigate("/songs")
            }
        ).catch(
            error => {
                console.log( error);
                setDataAPISongs({ ...dataAPISong, errorAPISongs: "Error al eliminar el estudiante." });
            })
    }

    if (dataAPISong.errorApiSong) {
        return <NotFound/>
    } 

    return(
            <>
                <CardSong {...dataAPISong.dataApiOne} deleteSong={deleteSong}/>
            </>
            );
}

export default ApiOneSong;