import './App.css'
import Formulario from './components/Formulario'
import Boton from './components/Boton'; 

function App() {
////// inline styling, not really recommended but we gotta learn it
  const estilo= {
    color : 'blue',
    fontSize : '40px'
  };

  return (
      <div>
          <h1 style={estilo} className="mi-clase">Esto es JSX</h1>
          <Formulario />
          <Boton />
      </div>
  )
}

export default App
