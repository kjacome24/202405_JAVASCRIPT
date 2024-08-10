import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../css/FormSong.module.css';
import axios from "axios";


const FormSongUpdate = ({ dataAPISongs, setDataAPISongs }) => {
    
    const params = useParams();
    const title = params.title; 
    const navigate = useNavigate();
    const currentArray = dataAPISongs.arrayAPISongs.find((song)=> song.title===title );
    if (!currentArray){
        navigate("*")
    }
    const [state, setState] = useState({
        title: "",
        artist: "",
        year: 0,
        genre: "",
        errorFormulario: []
    });

    useEffect(()=>{
        setState({...currentArray,errorFormulario: []})  
    },[title,currentArray]);

    const actualizarstate = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };


    const updateSong = (e) => {
        e.preventDefault();
        // if (!state.title || !state.artist || !state.year || !state.genre) {
        //     setState({ ...state, errorFormulario: "Please do not forget to fill all the fields" });
        //     return}
        const index = dataAPISongs.arrayAPISongs.findIndex((song)=> song.title===title);
        const updatedSongs = [...dataAPISongs.arrayAPISongs];

        const url = `http://localhost:8080/api/songs/${title}` 
        axios.put(url,state).then(response=>{
            updatedSongs[index] = response.data;
            setDataAPISongs(prevState => ({...prevState,arrayAPISongs:updatedSongs}))
            navigate(`/songs/${updatedSongs[index].title}`);
        }).catch(            error => {
            console.log(error);
            setState({ ...state, errorFormulario: error.response.data });
        })
    };

    return (
        <div className={styles.container}>
            <div className={styles.formulario} style={{ width: "70%" }}>
                <div className='card text-white bg-dark'>
                    <form className="form-control text-white bg-dark" onSubmit={(e) => updateSong(e)}>
                    {state.errorFormulario.title && <p style={{ color: 'red' }}>{state.errorFormulario.title}</p>}
                    {state.errorFormulario.artist && <p style={{ color: 'red' }}>{state.errorFormulario.artist}</p>}
                    {state.errorFormulario.year && <p style={{ color: 'red' }}>{state.errorFormulario.year}</p>}
                    {state.errorFormulario.genre && <p style={{ color: 'red' }}>{state.errorFormulario.genre}</p>}


                        <div>
                            <label className="form-control text-white bg-dark" htmlFor="title">Title:</label>
                            <input className="form-control" type="text" id='title' name='title' value={state.title} onChange={(e) => actualizarstate(e)} />

                        </div>
                        <div>
                            <label className="form-control text-white bg-dark" htmlFor="artist">Artist:</label>
                            <input className="form-control" type="text" id='artist' name='artist' value={state.artist} onChange={(e) => actualizarstate(e)} />

                        </div>
                        <div>
                            <label className="form-control text-white bg-dark" htmlFor="year">Year:</label>
                            <input className="form-control" type="number" id='year' name='year' value={state.year} onChange={(e) => actualizarstate(e)} />

                        </div>
                        <div>
                            <label className="form-control text-white bg-dark" htmlFor="genre">Genre:</label>
                            <input className="form-control" type="text" id='genre' name='genre' value={state.genre} onChange={(e) => actualizarstate(e)} />

                        </div>
                        <button type="submit" className="btn btn-warning">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSongUpdate;
