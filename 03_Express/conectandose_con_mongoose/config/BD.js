import { connect } from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const BD = process.env.BD;

const  TO_CONNECT_BD = async () =>{
    try {
        await connect(BD);
        console.log("¡Se conectó exitosamente a MongoDB!")
    }
    catch (error) {
        console.log("Hubo un problema conectandose a la BD", error)
    }
}

export default TO_CONNECT_BD;
