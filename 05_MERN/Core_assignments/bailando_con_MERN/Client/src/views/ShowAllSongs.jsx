import Filter from '../components/Filter';
import styles from '../css/ShowAll.module.css';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ShowAllSongs = ({ dataAPISongs, setDataAPISongs, songsfiltered }) => {
    const [arrayForShowAll, setArrayForShowAll] = useState([]);

    useEffect(() => {
        setArrayForShowAll([...songsfiltered]);
    }, [songsfiltered]);

    useEffect(() => {
        console.log(arrayForShowAll);
    }, [arrayForShowAll]);

    return (
        <div className={styles.listado}>
            <div className={styles.title}>
                <h1>All Songs</h1>
            </div>
            <div className={styles.filter}>
                <Filter setDataAPISongs={setDataAPISongs} dataAPISongs={dataAPISongs} />
            </div>
            <div className={styles.lista}>
                <div className={styles.sublista}>
                    {arrayForShowAll.map((element, index) =>
                        <div key={index} className='card text-white bg-dark' style={{ height: "30px", margin: "5px" }}>
                            <p>
                                <Link className={styles.no_link_style} to={`/songs/${element.title}`}>{element.title}</Link> by {element.artist}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShowAllSongs;
