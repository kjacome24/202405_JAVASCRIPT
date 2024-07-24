import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import NotesForm from './components/NotesForm';
import Note from './components/Note';
import FilterNote from './components/FilterNote';

function App() {
  const [notes,setNotes] = useState([]);
  const [filter,setFilter] = useState("All");

  const addingNotes = (note,priority)=> {
    const newNote = {note: note, priority: priority};
    const newArray = [...notes,newNote]
    setNotes(newArray)
  }

  const removeNote = (index)=> {
    const newArray= notes.filter((note,i)=>i!==index)
    setNotes(newArray)
  }

  const filtered_notes = filter==="All"? notes : notes.filter((note,index)=>note.priority===filter); 


  return (
    <div className='card text-white bg-dark mb-3' style={{ width: '500px' }}>
      <div className='card-header'>
        <h1>Notes: </h1>
        < NotesForm addingNotes={addingNotes}/>
      </div>
      <div className="card-body" >
        < FilterNote filter={filter} setFilter={setFilter}/>
        {filtered_notes.map((note,index)=> 
        < Note {...note} index={notes.indexOf(note)} removeNote={removeNote} key={notes.indexOf(note)} />
        )}

    </div>
    </div>
  )
}

export default App
