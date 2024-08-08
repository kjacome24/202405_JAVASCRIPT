import mongoose from "mongoose";
import {ColeccionCursos } from '../modelos/modelosCursos.js'

const ColeccionEstuadinte = mongoose.Schema(
    {
        nombre: {type : String,
            required : [true, "Es necesario proporcionar el nombre"]
        },
        apellido: {type : String,
            required : [true, "Es necesario proporcionar el apellido"]
        },
        cursos : [ColeccionCursos],
        email : {type : String,
            required : [true, "Es necesario proporcionar el email"],
            unique : true
        }
    }, { timestamps: true }
);



const Estudiante = mongoose.model("estudiantes",ColeccionEstuadinte);

export {Estudiante} ;