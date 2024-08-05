import './App.css'
import useContador from './hooks/useContador'

function App() {
  const [contador1,setAumentarContador1,setDisminuirContador1] = useContador(1,1,1);
  const [contador2,setAumentarContador2,setDisminuirContador2] = useContador(10,10,10);

  return (
    <>
      <h1>Hooks presonalizados</h1>
      <p>Contador 1: {contador1}</p>
      <div>
        <button onClick={setAumentarContador1}>Aumentar</button>
        <button onClick={setDisminuirContador1}>Disminuir</button>
      </div>
      <p>Contador 2: {contador2}</p>
      <div>
        <button onClick={setAumentarContador2}>Aumentar</button>
        <button onClick={setDisminuirContador2}>Disminuir</button>
      </div>
    </>
  )
}

export default App
