import mongoose from "mongoose";
import {format_date_a} from '../utils/dateFormat.js'
console.log(Number(format_date_a()));
const songSchema = new mongoose.Schema(
    {
        title: {type : String,
            required : [true, "Hey G, a song without a title is not a good one!"],
            minlength: [6, "Hey brother a title with less than 6 characters is not cool!"],
            maxlength: [255, "Hey hold on G, this is not a bible, too much text!"],
            unique : true
        },
        artist: {type : String,
            required : [true, "G please let us know who is the artist!"],
            minlength: [10, "Hey brother an artist with less than 10 sounds shady!"],
            maxlength: [25, "Hey take it easy, is the name of the artist not an essay!"]
        },
        year : {type : Number,
            required : [true, "Hey G do not forget to add the year!"],
            min :[1860, "If the song is older than 1860 u are tripping!"],
            max :[Number(format_date_a()), "G hold up, u ain't coming from the future!"]
        },
        genre : {type : String,
            required : [true, "Hey G do not forget to add the genre"],
            minlength: [3, "Not even pop is shorter than your genre!"],
            maxlength: [15, "G the genre is not that long!"]
        }
    }, { timestamps: true }
);

const Song = mongoose.model("songs",songSchema);

export default Song;