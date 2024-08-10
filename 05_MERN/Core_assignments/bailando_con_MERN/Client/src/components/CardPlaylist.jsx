import styles from '../css/CardSong.module.css';
import { Link, useNavigate } from 'react-router-dom';

const CardPlaylist = ({ name, songs, deletePlaylist }) => {
    const navigate = useNavigate();
    const updatePlaylist = ()=>{
        navigate(`/playlists/edit/${name}`)
    }

    return (
        <>
            <div className={styles.cardSong}>
                <div className='card text-white bg-dark'>
                    <p><span style={{ fontWeight: 'bold' }}>Name:</span> {name} </p>
                    <p><span style={{ fontWeight: 'bold' }}>Songs:</span></p>
                    <ul>
                        {songs.map((song, index) => (
                        <div key={index} className='card text-white bg-success'>
                            <li>
                                <Link to={`/songs/${song.title}`}>
                                    {song.title} by {song.artist} ({song.year}) - {song.genre}
                                </Link>
                            </li>
                        </div>))}
                    </ul>
                    <div>
                    <button className='btn btn-danger' onClick={deletePlaylist}>Delete</button>
                    <button className='btn btn-warning'onClick={updatePlaylist}>Update</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardPlaylist;
