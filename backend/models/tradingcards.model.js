import mongoose from "mongoose";

const tradingcardsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    set: {
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

const TradingCards = mongoose.model('TradingCards', tradingcardsSchema);

export default TradingCards;