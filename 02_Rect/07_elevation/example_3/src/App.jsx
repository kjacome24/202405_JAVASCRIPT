import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import NoteFilter from './components/NoteFilter';
import './App.css';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('All');


  const addNote = (note) => {
    setNotes([...notes, note]);
  };


  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };


  const filteredNotes = filter === 'All' ? notes : notes.filter(note => note.priority === filter);


  return (
    <div className="container">
      <h1>Notas</h1>
      <NoteForm addNote={addNote} />
      <NoteFilter setFilter={setFilter} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
};


export default App;

