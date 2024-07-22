import { useState, useEffect } from 'react';

const ListaDeTareas = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (evento) => {
    setTarea(evento.target.value);
  };

  const agregarTarea = () => {
    if (tarea.trim() === '') return;
    setTareas(prevTareas => [...prevTareas, tarea]);
    setTarea('');
  };
  
/////////////////////UseEffect to make it syncronous for the console.log. 
  useEffect(() => {
    console.log("Estado de tareas actualizado:", tareas); // Registro después de la actualización
    setMensaje('Tarea añadida correctamente');
}, [tareas]);

  return (
    <div>
      <input type="text" value={tarea} onChange={manejarCambio} placeholder="Escribe una tarea..." />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <p>{mensaje}</p>
      <ul>
        {tareas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;