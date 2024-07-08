import './App.css'
import Estudiante from './components/Estudiante';

const App = () => {
  let nombre = "Alex Miller";
  return (
    <div>
      <h1>Mi tercera aplicacion de React</h1>
      <p> Nombre: {nombre}</p>
      <Estudiante />
      <Estudiante />
      <Estudiante />
    </div>
  );
}

export default App