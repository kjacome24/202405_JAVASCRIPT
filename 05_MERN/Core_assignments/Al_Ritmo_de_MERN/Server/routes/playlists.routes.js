import {Router} from 'express';
import playlistsController from '../controllers/playlists.controller.js';

const playlistsRoutes = Router();



playlistsRoutes.get('/', playlistsController.getAll);

playlistsRoutes.get('/:name', playlistsController.getOne);

playlistsRoutes.post('/new',playlistsController.createOne);

playlistsRoutes.delete('/:name', playlistsController.deleteOne);

playlistsRoutes.put('/:name', playlistsController.updateOne);

export default playlistsRoutes;
