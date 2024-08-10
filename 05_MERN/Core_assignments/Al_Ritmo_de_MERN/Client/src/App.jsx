import './App.css'
import Encabezado from './components/Encabezado'
import NavBar from './components/NavBar'
import PieDePagina from './components/PieDePagina'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import ShowAllSongs from './views/ShowAllSongs'
import ApiSongs from './views/ApiSongs'
import ApiOneSong from './views/ApiOneSong'
import NotFound from './components/NotFound'
import ApiOnePlaylist from './views/ApiOnePlaylist'
import ApiPlaylist from './views/ApiPlaylist'
import FormSong from './components/FormSong'
import FormPlaylist from './components/FormPlaylist'
import ShowAllPlaylists from './views/ShowAllPlaylists'
import FormSongUpdate from './components/FormSongUpdate'
import FormPlaylistUpdate from './components/FormPlaylistUpdate'


function App() {
  const [dataAPISongs, setDataAPISongs] = useState({
    arrayAPISongs: [],
    errorAPISongs: null,
    arrayAPIPlaylists: [],
    errorAPIPlaylists: null,
    filterSongs : "",
    filterPlaylists : "",
    songsfiltered: [],
    playlistsfiltered: []
  })

/////////////Songs Filter
  const filterSongs = (songs, filter) => {
    return songs.filter(song => song.title.toLowerCase().includes(filter.toLowerCase()));
  };

  useEffect(() => {
    setDataAPISongs(prevState => ({
      ...prevState,
      songsfiltered: filterSongs(prevState.arrayAPISongs, prevState.filterSongs)
    }));
  }, [dataAPISongs.arrayAPISongs, dataAPISongs.filterSongs]);
///////////

/////////////Playlists filter
  const filterPlaylists = (playlists, filter) => {
    return playlists.filter(playlists => playlists.name.toLowerCase().includes(filter.toLowerCase()));
  };

  useEffect(() => {
    setDataAPISongs(prevState => ({
      ...prevState,
      playlistsfiltered: filterPlaylists(prevState.arrayAPIPlaylists, prevState.filterPlaylists)
    }));
  }, [dataAPISongs.arrayAPIPlaylists, dataAPISongs.filterPlaylists]);
///////////////////


  return (
    <>
      <ApiSongs dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs}/>
      <ApiPlaylist dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs}/>
      < Encabezado />
      <div className='contenido'>
        <NavBar />
        <Routes>
          <Route path="/songs" element={<ShowAllSongs dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs} songsfiltered={dataAPISongs.songsfiltered}/>}/>
          <Route path="/songs/:title" element={ <ApiOneSong dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs} filterSongs={filterSongs}/>}/>
          <Route path="/songs/edit/:title" element={ <FormSongUpdate dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs}/>}/>
          <Route path="/playlists" element={<ShowAllPlaylists dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs} playlistsfiltered={dataAPISongs.playlistsfiltered}/>}/>
          <Route path="/playlists/:name" element={ <ApiOnePlaylist dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs} filterPlaylists={filterPlaylists}/>}/>
          <Route path="/playlists/edit/:name" element={ <FormPlaylistUpdate  dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs}/>}/>
          <Route path="/songs/new" element={<FormSong dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs} />} />
          <Route path="/playlists/new" element={<FormPlaylist dataAPISongs={dataAPISongs} setDataAPISongs={setDataAPISongs} />} />
          <Route path="*" element={<NotFound />}/>
          <></>
        </Routes>

      </div>
      < PieDePagina />
    </>
  )
}

export default App
