import { useState, useTransition } from "react";

const FiltrarEstudiantes = (props)=> {
    const {filtro, setFiltro} = props;

    // const actualizarEstudianteFiltrados = (e) => {
    //     e.preventDefault();
    //     const listafiltrada = props.ListaEstudiantesFiltrados.filter((estudiante,index)=> estudiante.nombre.toLowerCase().includes(filtro.toLowerCase() ));
    //     props.setListaEstudiantesFiltrados(listafiltrada);
    // }

    return (
        <>
            <h2>Filtrar estudiantes por nombre</h2>
            {/* <form onSubmit={actualizarEstudianteFiltrados}> */}
                <label htmlFor="filtro">
                    Nombre:
                </label>
                <input type="text" id="filtro" name="filtro" value={filtro} onChange={(e)=> setFiltro(e.target.value)}/>
                <button className="btn btn-secondary">
                    Filtrar
                </button>
            {/* </form> */}
        </>
    );
}

export default FiltrarEstudiantes;