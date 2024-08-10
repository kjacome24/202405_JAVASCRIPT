import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../css/FormSong.module.css';
import axios from "axios";

const FormPlaylistUpdate = ({  dataAPISongs, setDataAPISongs}) => {
    console.log("we are here")
    const params = useParams();
    const playlistName = params.name; 
    const navigate = useNavigate();
    console.log(playlistName)
    // Find the current playlist based on the name from the URL params
    const currentPlaylist = dataAPISongs.arrayAPIPlaylists.find(playlist => playlist.name === playlistName);
    console.log(currentPlaylist)
    if (!currentPlaylist) {
        navigate("*");
        return null; // Return early if the playlist is not found
    }

    const [state, setState] = useState({
        name: currentPlaylist.name,
        songs: currentPlaylist.songs, // Initialize with the songs already in the playlist
        errorFormulario: ""
    });

    const updateState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const markSongs = (e) => {
        const { value, checked } = e.target;
        const songObject = dataAPISongs.arrayAPISongs.find(song => song.title === value);
    
        if (checked) {
            setState(prevState => ({ ...prevState, songs: [...prevState.songs, songObject] }));
        } else {
            setState(prevState => ({
                ...prevState,
                songs: prevState.songs.filter(song => song.title !== value)
            }));
        }
    };

    const updatePlaylist = async (e) => {
        e.preventDefault();
        if (!state.name) {
            setState({ ...state, errorFormulario: "Please do not forget to fill all the fields" });
            return}
        const index = dataAPISongs.arrayAPIPlaylists.findIndex((playlist)=> playlist.name===playlistName);
        const updatedPlaylist = [...dataAPISongs.arrayAPIPlaylists];

        const url = `http://localhost:8080/api/playlists/${playlistName}` 
        axios.put(url,state).then(response=>{
            updatedPlaylist[index] = response.data;
            setDataAPISongs(prevState => ({...prevState,arrayAPIPlaylists:updatedPlaylist}))
            console.log(`/playlists/${updatedPlaylist[index].name}`)
            navigate(`/playlists/${updatedPlaylist[index].name}`);
        }).catch(error => {
            console.log("Error al traer info:", error);
            setDataAPISongs(prevState => ({...prevState,errorApiSong:error}));
        })
    };

    return (
        <div className={styles.container}>
            <div className='card text-white bg-dark' style={{ width: "70%" }}>
                <div className={styles.formulario}>
                    <form className={styles.forml} onSubmit={updatePlaylist}>
                        {state.errorFormulario && <p style={{ color: 'red' }}>{state.errorFormulario}</p>}
                        <div>
                            <label style={{color:"blue"}} htmlFor="name">Name of the Playlist:</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id='name' 
                                name='name' 
                                value={state.name} 
                                onChange={updateState} 
                            />
                        </div>
                        <div className={styles.checkboxContainer}>
                            {dataAPISongs.arrayAPISongs.map((song, index) => (
                                <div className={styles.contenedorForm} key={index}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`songCheckbox${index}`}
                                        value={song.title}
                                        checked={state.songs.map(song => song.title).includes(song.title)}

                                        onChange={markSongs}
                                    />
                                    <label className="form-check-label" htmlFor={`songCheckbox${index}`}>
                                        {song.title} by {song.artist}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button style={{width:"150px",margin:"0 auto"}} type="submit" className="btn btn-warning">
                            Update Playlist
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPlaylistUpdate;

