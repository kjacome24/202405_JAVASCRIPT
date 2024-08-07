import Song from '../models/songs.model.js';

const songsController = {
    getAll : async  (req,res)=>{
        try{
            const songs = await Song.find();
            return res.status(201).json(songs);
        }catch(error) {
            return res.status(400).json(error);
        } 
    },
    getOne: async (req,res)=>{
        const title = req.params.title;
        try{
            const titleFound = await Song.findOne({title});
            if(!titleFound){
                
                return res.status(404).json({message: "We could not find the title!"})
            }
            return res.status(200).json(titleFound);
        }catch(error){
            return res.status(400).json(error);
        }
    },
    createOne: async (req,res)=>{
        console.log(req.body);
        const {title,artist,year,genre} = req.body;
        ///validation 
        const newSong = {
            title,
            artist, 
            year,
            genre
        }
        try{
            const songinDB = await Song.create(newSong);
            return res.status(201).json(songinDB);
        }catch(error) {
            const messages = {};
            if (error.name === 'ValidationError') {
                Object.keys(error.errors).forEach(key => {
                    messages[key] = error.errors[key].message;
                });
            } 
            if (error.code === 11000) {
                messages.title= "The title has already been registered!";
            }
            return res.status(400).json({ ...messages });
            }

        } 
    ,
    updateOne: async (req,res)=> {
        const {title,artist,year,genre} = req.body;
        const title_in = req.params.title;
        const dataToBeUpdated = {};
        if(title) {
            dataToBeUpdated.title = title;
        }
        if(artist){
            dataToBeUpdated.artist = artist;
        }
        if(year){
            dataToBeUpdated.year = year; 
        }
        if(genre){
            dataToBeUpdated.genre = genre;
        }
        try{
            const updatedSong = await Song.findOneAndUpdate({title: title_in}, dataToBeUpdated, {new:true , runValidators: true})
            if(!updatedSong){
                return res.status(404).json({message: "We could not find the title!"})
            }
            return res.status(200).json(updatedSong);
        }catch(error) {
            const messages = {};
            if (error.name === 'ValidationError') {
                Object.keys(error.errors).forEach(key => {
                    messages[key] = error.errors[key].message;
                });
            } 
            if (error.code === 11000) {
                messages.title= "The title has already been registered!";
            }
            return res.status(400).json({ ...messages });
            }
    },
    deleteOne: async (req,res)=> {
        const title =  req.params.title;
        try{
            const deletedSong = await Song.findOneAndDelete({title});
            console.log(deletedSong)
            if(!deletedSong){
                return res.status(404).json({message: "We could not find the title!"})
            }
            //Status 204 does not allow u to send a return message. 
            return res.status(204).end();
        }catch(error){
            return res.status(400).json(error);
        }
    }
}

export default songsController;