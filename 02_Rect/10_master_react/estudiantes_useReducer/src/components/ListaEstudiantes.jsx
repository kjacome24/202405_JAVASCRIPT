import Estudiante from '../components/Estudiante';
import FiltrarEstudiantes from '../components/FiltrarEstudiantes';
import { Link } from 'react-router-dom';


const ListaEstudiantes = ({dispatcher, filtro, listafiltrada}) =>{

    return (
        <>
            < FiltrarEstudiantes dispatcher={dispatcher} filtro={filtro} />
            <br></br>
            <div className='estudiantes'>
                <br></br>
                {listafiltrada.map((estudiante, index) => (
                    <div key={index} className='card'>
                        <h4 style={{color: 'blue'}}>{estudiante.nombre} {estudiante.apellido}</h4>
                        <Link to={`/estudiantes/${estudiante.id}`} >Detalles</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaEstudiantes;