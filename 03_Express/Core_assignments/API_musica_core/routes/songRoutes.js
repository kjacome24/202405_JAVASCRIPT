import {Router} from 'express';
import songController from '../controllers/songController.js';

const rutasCanciones = Router();


rutasCanciones.get('/',songController.allSongs );

rutasCanciones.get('/:id',songController.oneSong );

rutasCanciones.post('/nueva',songController.newSong );

export default rutasCanciones;