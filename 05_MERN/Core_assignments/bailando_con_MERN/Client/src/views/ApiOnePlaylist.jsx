import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CardPlaylist from '../components/CardPlaylist';
import NotFound from '../components/NotFound';

const ApiOnePlaylist = ({ dataAPISongs, setDataAPISongs, filterPlaylists }) => {
    const navigate = useNavigate();
    const params = useParams();
    const name = params.name;


    const [dataAPIPlaylist, setDataAPIPlaylist] = useState({
        dataApiOne: {
            name: "",
            songs: []
        },
        errorApiPlaylist: null
    });

    useEffect(() => {
        setDataAPIPlaylist({ ...dataAPIPlaylist, errorApiPlaylist: null });
        getData();
    }, [name]);

    const getData = () => {
        const url = `http://localhost:8080/api/playlists/${name}`;

        axios(url).then(
            response => {
                setDataAPIPlaylist({ ...dataAPIPlaylist, dataApiOne: response.data });
            }
        ).catch(
            error => {
                console.log("Error fetching playlist info:", error);
                setDataAPIPlaylist({ ...dataAPIPlaylist, errorApiPlaylist: error });
            }
        );
    };

    const deletePlaylist = () => {
        axios.delete(`http://localhost:8080/api/playlists/${name}`).then(
            (response) => {
                const updatedPlaylists = dataAPISongs.arrayAPIPlaylists.filter(playlist => playlist.name !== name);

                setDataAPISongs(prevState => ({
                    ...prevState,
                    arrayAPIPlaylists: updatedPlaylists,
                    playlistsFiltered: filterPlaylists(updatedPlaylists, prevState.filterPlaylists)
                }));

                navigate("/playlists");
            }
        ).catch(
            error => {
                console.log(error);
                setDataAPISongs({ ...dataAPIPlaylist, errorAPIPlaylists: "Error deleting the playlist." });
            }
        );
    };

    if (dataAPIPlaylist.errorApiPlaylist) {
        return <NotFound />;
    }

    return (
        <>
            <CardPlaylist {...dataAPIPlaylist.dataApiOne} deletePlaylist={deletePlaylist} />
        </>
    );
};

export default ApiOnePlaylist;
