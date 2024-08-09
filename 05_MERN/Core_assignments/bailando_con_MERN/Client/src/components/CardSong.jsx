import styles from '../css/CardSong.module.css';

const CardSong = ({title,artist,year,genre,deleteSong}) => {

    return(
        <>
            <div className={styles.cardSong}>
                <div className='card text-white bg-dark'>
                <p><span style={{fontWeight: 'bold'}}>Title:</span> {title} </p>
                <p><span style={{fontWeight: 'bold'}}>Artist:</span> {artist}</p>
                <p><span style={{fontWeight: 'bold'}}>Year:</span> {year}</p>
                <p><span style={{fontWeight: 'bold'}}>Genre:</span> {genre}</p>
                <button className='btn btn-danger'onClick={deleteSong}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default CardSong;