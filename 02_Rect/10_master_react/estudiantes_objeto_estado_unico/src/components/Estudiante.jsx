const Estudiante = (props)=> {
  const {nombre, apellido, edad, id} = props;

  return (
      <div className="card">
          <p><span style={{fontWeight: 'bold'}}>Nombre:</span> {nombre} {apellido}</p>
          <p><span style={{fontWeight: 'bold'}}>Edad:</span> {edad}</p>
          <p><span style={{fontWeight: 'bold'}}>ID:</span> {id}</p>
      </div>
  );
}

export default Estudiante;