import styles from '../css/Note.module.css'

const Note = (props) =>{
    const {note, priority, index, removeNote} = props;
    return (
        <div className={styles.note}>
            <p>{note}</p>
                {priority==="High"? 
                <p className={styles.high} >{priority}</p>:
                (priority==="Medium"? 
                    <p className={styles.medium} >{priority}</p>:
                    <p className={styles.low}>{priority}</p>)}
                
            <button className='btn btn-danger' onClick={()=> removeNote(index)}>Remove</button>
        </div>
    )
}

export default Note;