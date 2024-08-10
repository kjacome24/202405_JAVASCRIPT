import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const BD = process.env.BD;

const  toConnectToBD = async () =>{
    try {
        await connect(BD);
        console.log("U succesfully connected to the DB!")
    }
    catch (error) {
        console.log("There was an issue connecting to the DB!", error)
    }
}

export default toConnectToBD;