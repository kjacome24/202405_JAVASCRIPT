import Playlist from '../models/playlists.model.js';
import {Song} from '../models/songs.model.js';

const playlistsController = {
    getAll : async  (req,res)=>{
        try{
            const playlists = await Playlist.find();
            return res.status(201).json(playlists);
        }catch(error) {
            return res.status(400).json(error);
        } 
    },
    getOne: async (req,res)=>{
        const name = req.params.name;
        console.log(name)
        try{
            const nameFound = await Playlist.findOne({name});
            if(!nameFound){
                
                return res.status(404).json({message: "We could not find the name!"})
            }
            return res.status(200).json(nameFound);
        }catch(error){
            return res.status(400).json(error);
        }
    },
    createOne: async (req, res) => {
        try {
            const { name, songs } = req.body; // songs is an array of song names
    
            console.log("Incoming request body:", req.body);
    
            if (!songs || songs.length === 0) {
                return res.status(400).json({ message: "The playlist must contain at least one song." });
            }
    
            // Fetch the songs from the database based on their names
            const foundSongs = await Song.find({ title: { $in: songs } });
    
            // Check if all songs were found
            if (foundSongs.length !== songs.length) {
                return res.status(400).json({ message: "One or more songs were not found in the database." });
            }
    
            // Create the new playlist with the associated songs
            const newPlaylist = new Playlist({
                name: name,// Use the actual song objects
                songs: foundSongs
            });
    
            const savedPlaylist = await newPlaylist.save();
            console.log("Saved playlist:", savedPlaylist);
            return res.status(201).json(savedPlaylist);
    
        } catch (error) {
            console.error("Error in createOne:", error);
            return res.status(400).json(error);
        }
    },
    updateOne: async (req,res)=> {

        const {name,songs} = req.body;

        const name_in = req.params.name;

        const dataToBeUpdated = {};
        if(name) {
            dataToBeUpdated.name = name;
        }
        if(songs){
            dataToBeUpdated.songs = songs;
        }

        try{
            const updatedPlaylist = await Playlist.findOneAndUpdate({name: name_in}, dataToBeUpdated, {new:true , runValidators: true})
            console.log("Entramos a la ruta correcta")
            console.log(updatedPlaylist)
            if(!updatedPlaylist){
                return res.status(404).json({message: "We could not find the Name of the album!"})
            }
            return res.status(200).json(updatedPlaylist);
        }catch(error) {
            const messages = {};
            if (error.name === 'ValidationError') {
                Object.keys(error.errors).forEach(key => {
                    messages[key] = error.errors[key].message;
                });
            } 
            return res.status(400).json({ ...messages });
            }
    }
    ,
    deleteOne: async (req,res)=> {
        const name =  req.params.name;
        try{
            const deletedPlaylist = await Playlist.findOneAndDelete({name});
            console.log(deletedPlaylist)
            if(!deletedPlaylist){
                return res.status(404).json({message: "We could not find the name!"})
            }
            //Status 204 does not allow u to send a return message. 
            return res.status(204).end();
        }catch(error){
            return res.status(400).json(error);
        }
    }
}

export default playlistsController;