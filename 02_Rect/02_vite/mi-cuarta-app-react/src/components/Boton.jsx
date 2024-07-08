const Boton = () => {
const manejarClick = () => {
    alert("Boton Clicado!");
}

return (
    <div >
        <button onClick={manejarClick} type="button" className="btn btn-warning">¡Click aquí!</button>
    </div>
)

}

export default Boton