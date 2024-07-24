import { useState } from "react";
import styles from '../css/NotesForm.module.css';

const NotesForm = (props) => {
    const {addingNotes} = props;
    const [note, setNote] = useState("");
    const [priority, setPriority] = useState("High");

    const addingNote = (e)=> {
        e.preventDefault();
        addingNotes(note,priority);
        setNote("");
        setPriority("High");
    }

    return (
        <div className={styles.card_note}>
            <form onSubmit={addingNote}>
            <br></br>
                <div className="form-group">
                    <input className="form-control" type="text" id="note" name="note" placeholder="Write down your note" autoComplete="note" value={note} onChange={(e)=>setNote(e.target.value)} required/>
                </div>
                <br></br>
                <div className="form-group">
                    <select className="form-control " id="priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="High" >High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Create Note</button>
            </form>
        </div>
    );
}

export default NotesForm;