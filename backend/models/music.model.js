import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true // this will automatically create a timestamp for when the document was created and last updated
});

const Music = mongoose.model('Music', musicSchema);

export default Music;