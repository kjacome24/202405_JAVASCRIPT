import express from 'express';
import rutasPlaylists from './routes/playlistsRoutes.js';
import rutasCanciones from './routes/songRoutes.js'


/////This is needed for using the body
const app = express(); 
const port = process.env.PORT || 8000;



///Midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))



///////////routes
app.use('/api/canciones', rutasCanciones);
app.use('/api/playlists', rutasPlaylists);


//////////Listener
app.listen(port, () => {
	console.log(`El servidor está activo en el puerto: ${port}`);
	});