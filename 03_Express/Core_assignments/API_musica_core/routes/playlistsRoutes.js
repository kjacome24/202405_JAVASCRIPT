import {Router} from 'express';
import playlistController from '../controllers/playlistController.js';


const rutasPlaylists = Router();


rutasPlaylists.get('/',playlistController.allPlaylists );

rutasPlaylists.get('/:id', playlistController.onePlaylist);

rutasPlaylists.post('/nueva', playlistController.newPlaylist);


export default rutasPlaylists;