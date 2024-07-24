import styles from '../css/FilterNote.module.css';

const FilterNote =  (props)=> {
    const {filter,setFilter} = props;
    return(
        <form>
            <div >
                <select className={styles.filter} id="filer" name="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All" >All</option>
                    <option value="High" >High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </form>
    );
    
}

export default FilterNote;