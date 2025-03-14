import mongoose from "mongoose";

const videogamesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true // this will automatically create a timestamp for when the document was created and last updated
});

const VideoGames = mongoose.model('VideoGames', videogamesSchema);

export default VideoGames;