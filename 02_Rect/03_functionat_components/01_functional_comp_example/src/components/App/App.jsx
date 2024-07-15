import './App.css'

const App = () => {
  const estudiante = {
    nombre: "Kevin",
    apellido: "Jacome"
  }

  const calificaciones = [8.9, 7.5, 9.0, 10];

  const promedio  = ([...calificaciones]) => {
    let total=0;
    calificaciones.forEach(calificacion => total += calificacion)
    return total / calificaciones.length
  }

  console.log(promedio(calificaciones))

  return (
    <div className='appdiv'>
      <h1>Probando Componentes</h1>
      <p>{estudiante.nombre} {estudiante.apellido}</p>
      <ul>
        {calificaciones.map((valor,index)=> {
          return (<li key={index}>{index}: {valor}</li>)
        })}
      </ul>
      <h2>Promedio de calificaciones: {promedio(calificaciones)}</h2>
        {promedio(calificaciones)>9? <p>Maravilloso pasaste</p> :<p>Lo siento, no pasaste</p>}
    </div>
  )
}

export default App
