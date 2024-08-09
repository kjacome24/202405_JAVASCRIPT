import mongoose from "mongoose";



const songSchema = mongoose.Schema(
    {
        title: {type : String,
            required : [true, "Hey G, a song without a title is not a good one!"],
            unique : true

        },
        artist: {type : String,
            required : [true, "G please let us know who is the artist!"]
        },
        year : {type : Number,
            required : [true, "Hey G do not forget to add the year!"]
        },
        genre : {type : String,
            required : [true, "Hey G do not forget to add the genre"]
        }
    }, { timestamps: true }
);

const Song = mongoose.model("songs",songSchema);

export {Song,songSchema};