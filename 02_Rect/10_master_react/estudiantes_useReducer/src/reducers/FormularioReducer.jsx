const FormularioReducer = (estado, accion) => {
    switch(accion.tipo) {
        case "ACTUALIZARESTADO": return {
                            ...estado,
                            [accion.objeto.target.name]: accion.objeto.target.value
                        }
        case "AGREGAR": return {
                            ...estado,
                            [accion.objeto.target.name]: accion.objeto.target.value
                        }
        case "SET_ERROR": return {
                            ...estado,
                            errorFormulario: "Por favor, completa todos los campos."
                        }
        case "RESET_FORM": return {
                            ...estado,
                            nombre: "",
                            apellido: "",
                            edad: 0,
                            errorFormulario: ""
                        }
                            }
}

export default FormularioReducer;