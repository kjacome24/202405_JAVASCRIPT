

const AppReducer = (estado, accion) => {
    switch(accion.tipo) {
        case "AGREGAR_USUARIO": return {
                                    ...estado,
                                    estudiantes: [...estado.estudiantes, accion.datos]
                                }
        case "SHOW_FORM": return {
                            ...estado,
                            showform: !estado.showform
                        }
        case "FILTRO": return {
                            ...estado,
                            filtro: accion.filtro
                        }
                            }
}

export default AppReducer;