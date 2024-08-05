import express from 'express';
import {faker} from "@faker-js/faker";
import { format_date_a, format_date_one_year_ago, format_date_b , format_date_c  } from './utils/formatearFecha.js';

/////THis is needed for using the body
const app = express(); 
app.use(express.json());
app.use(express.urlencoded({extended: true}))




let songs = [
];

let playlists = [
];


console.log(songs.length);

const getsong = ()=> {
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
};


const getplaylist = ()=> {
    const new_playlist = {
        id: Math.floor(Math.random() * 280),
        nombre: faker.word.words({ count: { min: 1, max: 5 } }), 
        descripcion: faker.lorem.paragraphs({ min: 1, max: 3 }) ,  
        canciones: Array(10).fill().map(()=> getsong()),
        creador: (faker.person.firstName() + " "+  faker.person.lastName() ),
        fechaCreacion: format_date_a(faker.defaultRefDate()) 
    }
    return new_playlist;
};


const port = process.env.PORT || 8000;


app.post('/nueva/cancion', (req, res) => {
    const new_song = getsong();
    
	return res.status(201).json(new_song);
	});

app.get('/canciones', (req, res) => {
    
	return res.status(201).json(songs);
	});

app.post('/nueva/playlist', (req, res) => {
    const new_playlist = getplaylist();
    playlists.push(new_playlist);
	return res.status(201).json(new_playlist);
	});

app.get('/playlists', (req, res) => {
    
	return res.status(201).json(playlists);
	});


app.listen(port, () => {
	console.log(`El servidor está activo en el puerto: ${port}`);
	});