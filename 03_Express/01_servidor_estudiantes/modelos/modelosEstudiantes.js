import mongoose from "mongoose";

const ColeccionEstuadinte = mongoose.Schema(
    {
        nombre: {type : String,
            required : [true, "Es necesario proporcionar el nombre"]
        },
        apellido: {type : String,
            required : [true, "Es necesario proporcionar el apellido"]
        },
        edad : {type : Number,
            required : [true, "Es necesario proporcionar el apellido"]
        },
        email : {type : String,
            required : [true, "Es necesario proporcionar el email"],
            unique : true
        }
    }
);

const Estudiante = mongoose.model("estudiantes",ColeccionEstuadinte);

export default Estudiante;