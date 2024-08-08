import mongoose from "mongoose";

const ColeccionCursos = mongoose.Schema(
    {
        nombre: {type : String,
            required : [true, "Es necesario proporcionar el nombre del curso"]
        },
        instructor: {type : String,
            required : [true, "Es necesario proporcionar el nombre del instructor"]
        },
        clave : {type : String,
            required : [true, "Es necesario proporcionar la clave del curso"],
            unique : true
        }
    }, { timestamps: true }
);

const Curso = mongoose.model("cursos",ColeccionCursos);

export {Curso, ColeccionCursos} ;