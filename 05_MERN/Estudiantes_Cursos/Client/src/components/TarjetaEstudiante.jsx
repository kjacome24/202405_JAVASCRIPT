import styles from '../css/TarjetaEstudiante.module.css'


const TarjetaEstudiante = (props)=> {
    const {nombre, apellido, cursos, email,eliminarEstudiante} = props;
    
    return (
        <div className={styles.tarjetaunestudiante}>
            <div className="card">
                <p><span style={{fontWeight: 'bold'}}>Nombre:</span> {nombre} </p>
                <p><span style={{fontWeight: 'bold'}}>Apellido:</span> {apellido}</p>
                <p><span style={{fontWeight: 'bold'}}>Email:</span> {email}</p>
                <p><span style={{fontWeight: 'bold'}}>Cursos:</span> </p>
                <ul>
                {cursos.map((curso,index)=><li key={index}>{curso.nombre}</li>)}
                </ul>
                <br></br>
                <button className='btn btn-danger' onClick={eliminarEstudiante}>Eliminar</button>
                
            </div>
        </div>
    );
}

export default TarjetaEstudiante;