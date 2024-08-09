import mongoose from "mongoose";
import {songSchema} from './songs.model.js';

const playlistSchema = mongoose.Schema(
    {
        name: {type : String,
            required : [true, "Hey G, a playlist without a title is not a good one!"],
            unique : true
        },
        songs : [songSchema]
    }, { timestamps: true }
);

const Playlist = mongoose.model("playlists",playlistSchema);

export default Playlist;