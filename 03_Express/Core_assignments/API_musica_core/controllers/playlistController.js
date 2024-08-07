import {faker} from "@faker-js/faker";
import { format_date_a} from '../utils/formatearFecha.js';
import songController from "./songController.js";

let playlists = [
];

const playlistController = {
    getplaylist : ()=> {
        const new_playlist = {
            id: Math.floor(Math.random() * 280),
            nombre: faker.word.words({ count: { min: 1, max: 5 } }), 
            descripcion: faker.lorem.paragraphs({ min: 1, max: 3 }) ,  
            canciones: Array(10).fill().map(()=> songController.getsong()),
            creador: (faker.person.firstName() + " "+  faker.person.lastName() ),
            fechaCreacion: format_date_a(faker.defaultRefDate()) 
        }
        return new_playlist;
    },
    allPlaylists : (req, res) => {
        return res.status(201).json(playlists);
        },
    onePlaylist : (req, res) => {
        const id = Number(req.params.id);
        const encontrar_playlist = playlists.find((playlist)=> playlist.id===id);
        if (!encontrar_playlist) {
            return res.status(404).json({mensaje: "Id no existente"})
            }
        return res.status(201).json(encontrar_playlist);
            },
    newPlaylist : (req, res) => {
        const new_playlist = playlistController.getplaylist();
        playlists.push(new_playlist);
        return res.status(201).json(new_playlist);
        }
}

export default playlistController;