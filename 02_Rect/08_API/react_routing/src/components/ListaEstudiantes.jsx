import Estudiante from '../components/Estudiante';
import FiltrarEstudiantes from '../components/FiltrarEstudiantes';


const ListaEstudiantes = ({setFiltro, filtro, listafiltrada}) =>{

    return (
        <>
            < FiltrarEstudiantes setFiltro={setFiltro} filtro={filtro} />
            <br></br>
            <div className='estudiantes'>
                <br></br>
                {listafiltrada.map((estudiante, index) => (
                <Estudiante key={index}
                {...estudiante}
                />
                ))}
            </div>
        </>
    );
}

export default ListaEstudiantes;