import { useNavigate } from 'react-router-dom';
import styles from '../css/CardSong.module.css';

const CardSong = ({title,artist,year,genre,deleteSong}) => {
    const navigate = useNavigate()
    const updateSong = ()=>{
        navigate(`/songs/edit/${title}`)
    }

    return(
        <>
            <div className={styles.cardSong}>
                <div className='card text-white bg-dark'>
                <p><span style={{fontWeight: 'bold'}}>Title:</span> {title} </p>
                <p><span style={{fontWeight: 'bold'}}>Artist:</span> {artist}</p>
                <p><span style={{fontWeight: 'bold'}}>Year:</span> {year}</p>
                <p><span style={{fontWeight: 'bold'}}>Genre:</span> {genre}</p>
                <div className={styles.buttons_form}>
                <button className='btn btn-danger'onClick={deleteSong}>Delete</button>
                <button className='btn btn-warning'onClick={updateSong}>Update</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default CardSong;