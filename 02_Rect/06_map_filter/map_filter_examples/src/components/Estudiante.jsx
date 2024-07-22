const Estudiante = (props)=> {
    const {nombre, apellido, edad} = props;

    return (
        <div className="card">
            <h4>Nombre: {nombre} {apellido}</h4>
            <p>Edad: {edad}</p>
        </div>
    );
}

export default Estudiante;