const Estudiante = (props) => {
    return(
    <div className="card">
        <h2>Nombre: {props.nombre} {props.apellido} </h2>
        <p>Edad: {props.edad}</p>
    </div>
    );
}

export default Estudiante;