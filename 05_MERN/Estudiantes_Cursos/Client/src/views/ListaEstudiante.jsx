import styles from '../css/ListaEstudiante.module.css';
import { Link } from 'react-router-dom';


const ListaEstudiante = ({dataAPIEstudiantes})=>{
    const listaEstudiante = dataAPIEstudiantes.arregloApiEstudiantes;
    console.log(listaEstudiante)
    return(
        <div className={styles.estudiante}>
            {listaEstudiante.map((estudiante,index)=>
                <div key={index} className="card" style={{height:"100px"}}>
                    <h4 style={{color: 'blue'}}>{estudiante.nombre} {estudiante.apellido}</h4>
                    <Link to={`/estudiante/${estudiante.email}`} >Detalles</Link>
                </div>
            )}
        </div>
    );
}

export default ListaEstudiante;