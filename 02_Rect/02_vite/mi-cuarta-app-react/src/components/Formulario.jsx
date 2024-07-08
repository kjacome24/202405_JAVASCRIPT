const Formulario = () => {
    return (
        <form action="/procesar" method="post">
            <div className="form-group">
                <label htmlFor="correo">Correo: </label>
                <input type="text" id="correo" name="usuario" className="form-control"></input>
            </div>
        </form>
    )
}

export default Formulario;

