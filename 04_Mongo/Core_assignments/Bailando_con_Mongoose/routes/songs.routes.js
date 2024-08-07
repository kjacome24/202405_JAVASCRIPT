import {Router} from 'express';
import songsController from '../controllers/songs.controller.js';

const songsRoutes = Router();



songsRoutes.get('/', songsController.getAll);

songsRoutes.get('/:title', songsController.getOne);

songsRoutes.post('/new',songsController.createOne);

songsRoutes.put('/:title', songsController.updateOne);

songsRoutes.delete('/:title', songsController.deleteOne);

export default songsRoutes;