import React, { useState } from 'react';


const NoteForm = ({ addNote }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');


  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      text,
      priority
    });
    setText('');
    setPriority('Low');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu nota"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Baja</option>
        <option value="Medium">Media</option>
        <option value="High">Alta</option>
      </select>
      <button type="submit">Agregar Nota</button>
    </form>
  );
};


export default NoteForm;