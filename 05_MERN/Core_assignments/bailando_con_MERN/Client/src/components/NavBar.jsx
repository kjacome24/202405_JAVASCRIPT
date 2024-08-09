import styles from '../css/NavBar.module.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const NavBar = ()=> {
    return (
        <div className={styles.navbar}>
                <ul >
                    <Link  className={styles.no_link_style} to="/songs">
                        <li>
                        <h2>Songs</h2>
                        </li>
                    </Link>
                    <Link  className={styles.no_link_style} to="/playlists">
                        <li>
                            <h2>Playlist</h2>
                        </li>
                    </Link>
                    <Link  className={styles.no_link_style} to="/songs/new">
                        <li>
                            <h2>AddSong</h2>
                            
                        </li>
                    </Link>
                    <Link  className={styles.no_link_style} to="/playlists/new">
                        <li>
                            <h2>Add Playlist</h2>
                            
                        </li>
                    </Link>
                </ul>
        </div>
    );
}

export default NavBar;