

const Estudiante = (props) => {
    const {nombre , apellido, edad} = props
    return(
    <div className="card">
        <h2>Nombre: {nombre} {apellido} </h2>
        <p>Edad: {edad}</p>
    </div>
    );
}

export default Estudiante;