import styles from '../css/Filter.module.css';

const Filter = (props)=> {
    const {dataAPISongs, setDataAPISongs,songOrPlaylist} = props;
    const value = !songOrPlaylist ? dataAPISongs.filterSongs : dataAPISongs.filterPlaylists;
    const onChange = (e) => {
        if (!songOrPlaylist) {
            setDataAPISongs({ ...dataAPISongs, filterSongs: e.target.value });

        } else {
            setDataAPISongs({ ...dataAPISongs, filterPlaylists: e.target.value });

        }
    };

    return (
        <div className={styles.filter}>
            <input
                className="form-control"
                type="text"
                id="filtro"
                name="filtro"
                value={value}  // Use the computed value
                onChange={onChange}  // Use the computed onChange handler
                placeholder="Please type to filter"
            />
        </div>
    );
}

export default Filter;