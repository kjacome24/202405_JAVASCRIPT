import React from 'react';


const NoteFilter = ({ setFilter }) => {
  return (
    <div className="filter">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">Todas</option>
        <option value="Low">Baja</option>
        <option value="Medium">Media</option>
        <option value="High">Alta</option>
      </select>
    </div>
  );
};


export default NoteFilter;
