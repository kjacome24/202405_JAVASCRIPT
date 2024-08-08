import { connect } from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const BASE_DE_DATOS = process.env.BASE_DE_DATOS;

const  conectarBD = async () =>{
    try {
        await connect(BASE_DE_DATOS);
        console.log("Has accedido a la BD correctamente!")
    }
    catch (error) {
        console.log("Hubo un problema conectandose a la BD", error)
    }
}

export default conectarBD;
