import React from 'react';


const NoteList = ({ notes, deleteNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <span>{note.text} - {note.priority}</span>
          <button className="delete" onClick={() => deleteNote(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};


export default NoteList;
