import styles from '../css/CardSong.module.css';
import { Link } from 'react-router-dom';

const CardPlaylist = ({ name, songs, deletePlaylist }) => {

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
                    <button className='btn btn-danger' onClick={deletePlaylist}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default CardPlaylist;
