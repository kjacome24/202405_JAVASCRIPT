import React, { useState } from 'react';

const ListaDeTareas = () => {
    const tareas_og = [
        { id: 1, texto: 'Hacer las compras', completada: false },
        { id: 2, texto: 'Limpiar la casa', completada: false },
        { id: 3, texto: 'Hacer ejercicio', completada: false }
        ];

    const [tareas, setTareas] = useState(tareas_og);

    const markCompleted = id => {
        setTareas(prevtareas => 
            prevtareas.map(tarea=>
                tarea.id===id? {...tarea, completada: !tarea.completada}: tarea 
            
        ))
        
    };

    return (
    <div>
        <h2>Lista de Tareas</h2>
        <ul>
            {tareas.map((tarea,index)=> <li key={index} onClick={()=>markCompleted(tarea.id)} style={{textDecoration : tarea.completada? 'line-through' : 'none'} }>{tarea.texto}:  </li>)}
        </ul>
    </div>
);
};

export default ListaDeTareas;