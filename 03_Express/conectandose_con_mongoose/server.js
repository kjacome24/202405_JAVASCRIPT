	// Importamos el módulo express
	import express from 'express';
    import dotenv from 'dotenv';
    import cors from 'cors';
    import TO_CONNECT_BD from './config/BD.js'

    dotenv.config();
	// Creamos una instancia de la aplicación express
	const app = express();

	// Definimos el puerto en el que el servidor escuchará las solicitudes
	// Usar una variable de entorno es una buena práctica para definir el puerto
	const port = process.env.PORT || 8000;


    TO_CONNECT_BD();
    // midleware
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({extended: true}));
    
	// Definimos una ruta básica para el servidor
	app.get('/', (req, res) => {
	res.send('Hola Mundo!');
	});

	// Configuramos el servidor para que escuche en el puerto especificado
	// y ejecutamos una función callback que muestra un mensaje en la consola
	app.listen(port, () => {
	console.log(`El servidor está activo en el puerto: ${port}`);
	});