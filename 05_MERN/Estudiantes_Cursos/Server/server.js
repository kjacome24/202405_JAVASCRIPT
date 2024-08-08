import express from 'express';
import rutasEstudiantes from './rutas/rutasEstudiantes.js';
import rutasCursos from './rutas/rutasCursos.js';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarBD from './configuracion/base_de_datos.js';


dotenv.config();

const app = express(); 


const PUERTO = process.env.PUERTO ;



///TO connect to BD
conectarBD();

// midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:5173"
}));




app.use('/api/estudiantes', rutasEstudiantes);
app.use('/api/cursos', rutasCursos);



/////localhost:8080
app.listen(PUERTO, () => {
    console.log(`El servido se encuentra activo en el puerto ${PUERTO}`)
}

);