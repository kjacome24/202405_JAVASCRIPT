import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../css/FormSong.module.css';
import axios from "axios";

const FormPlaylist = ({ dataAPISongs, setDataAPISongs }) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        songs: [],
        errorFormulario: ""
    });

    const updateState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const toAdd = async (e) => {
        e.preventDefault();
        if (!state.name || !state.songs.length) {
            setState({ ...state, errorFormulario: "Please do not forget to fill out your name and to select at least a song" });
            return;
        }

        const newPlaylist = {
            name: state.name,
            songs: state.songs // Send only the names of the selected songs
        };

        try {
            const response = await axios.post("http://localhost:8080/api/playlists/new", newPlaylist);
            console.log("Response from server:", response);
    
            setDataAPISongs(prevData => ({
                ...prevData,
                arrayAPIPlaylists: [...prevData.arrayAPIPlaylists, response.data]
            }));
    
            setState({
                name: "",
                songs: [],
                errorFormulario: ""
            });
    
            navigate("/playlists");
        } catch (error) {
            console.error("Error adding playlist:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setState({ ...state, errorFormulario: error.response.data.message });
            } else {
                setState({ ...state, errorFormulario: "There was an issue adding the playlist." });
            }
        }
    };

    const markSongs = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setState({ ...state, songs: [...state.songs, value] });
        } else {
            setState({ ...state, songs: state.songs.filter(song => song !== value) });
        }
    };

    return (
        <div className={styles.container}>
            <div className='card text-white bg-dark' style={{ width: "70%" }}>
                <div className={styles.formulario}>
                    <form className={styles.forml} onSubmit={toAdd}>
                        {state.errorFormulario && <p style={{ color: 'red' }}>{state.errorFormulario}</p>}
                        <div>
                            <label style={{color:"blue"}} htmlFor="name"> Name of the Plalist: </label>
                            <input className="form-control" type="text" id='name' name='name' value={state.name} onChange={updateState} />
                        </div>
                        {dataAPISongs.arrayAPISongs.map((song, index) => (
                            <div className={styles.contenedorForm} key={index} >
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`songCheckbox${index}`}
                                    value={song.title}
                                    onChange={markSongs}
                                />
                                <label className="form-check-label" htmlFor={`songCheckbox${index}`}>
                                    {song.title} by {song.artist}
                                </label>
                            </div>
                        ))}
                        <button style={{width:"150px",margin:"0 auto"}}type="submit" className="btn btn-warning">
                            Add Playlist
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPlaylist;
