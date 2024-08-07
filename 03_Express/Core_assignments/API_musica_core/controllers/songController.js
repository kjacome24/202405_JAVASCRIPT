import {faker} from "@faker-js/faker";
import { format_date_a} from '../utils/formatearFecha.js';

let songs = [
];

const songController = {
    getsong : ()=> {
        const new_song = {
            id: songs.length,
            titulo: faker.music.songName(),
            artista: (faker.person.firstName() + " "+  faker.person.lastName() ) ,
            album: faker.word.words({ count: { min: 1, max: 5 } }),
            duracion: Math.floor(Math.random() * 280)  + " Segundos" ,
            genero : faker.music.genre(),  
            fechaLanzamiento : format_date_a(faker.defaultRefDate())
        }
        songs.push(new_song);
        return new_song;
    },
    allSongs : (req, res) => {
        return res.status(201).json(songs);
        },
    oneSong : (req, res) => {
        const id = Number(req.params.id);
        const encontrar_cancion = songs.find((song)=> song.id===id);
        if (!encontrar_cancion) {
            res.statusMessage = "Este estudiante no se muestra en la lista";
            return res.status(404).json({mensaje: "Id no existente"})
            }
        return res.status(201).json(encontrar_cancion);
            },
    newSong : (req, res) => {
        const new_song = songController.getsong();
        return res.status(201).json(new_song);
        }
    
}

export default songController;



