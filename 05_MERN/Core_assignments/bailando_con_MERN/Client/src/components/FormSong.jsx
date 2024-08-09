import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../css/FormSong.module.css';
import axios from "axios";

const FormSong = ({ dataAPISongs, setDataAPISongs }) => {
    const [state, setState] = useState({
        title: "",
        artist: "",
        year: 0,
        genre: "",
        errorFormulario: ""
    });

    const actualizarstate = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const navigate = useNavigate();

    const agregar = (e) => {
        e.preventDefault();
        if (!state.title || !state.artist || !state.year || !state.genre) {
            setState({ ...state, errorFormulario: "Please do not forget to fill all the fields" });
            return;
        }

        axios.post("http://localhost:8080/api/songs/new", state).then(
            (response) => {
                setDataAPISongs({
                    ...dataAPISongs,
                    arrayAPISongs: [...dataAPISongs.arrayAPISongs, response.data] // Use response data instead of state
                });
                setState({
                    title: "",
                    artist: "",
                    year: 0,
                    genre: "",
                    errorFormulario: ""
                });
                navigate("/songs"); // Move navigation here after successful submission
            }
        ).catch(
            error => {
                console.log(error);
                setState({ ...state, errorFormulario: "There was an issue adding the song" });
            }
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.formulario} style={{ width: "70%" }}>
                <div className='card text-white bg-dark'>
                    <form className="form-control text-white bg-dark" onSubmit={(e) => agregar(e)}>
                        {state.errorFormulario && <p style={{ color: 'red' }}>{state.errorFormulario}</p>}
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
                            Add Song
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSong;
