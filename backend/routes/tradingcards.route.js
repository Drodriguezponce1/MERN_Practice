import express from 'express';
import TradingCard from '../models/tradingcards.model.js'; // we import the music model so that we can use it in the routes (double dot means go back one folder)
import mongoose, { mongo } from 'mongoose';

const router = express.Router(); // we reroute the api calls to this router

router.get('/', async (req, res) => {
    try {
        const tradingcard = await TradingCard.find({}); // this will return all the music in the database
        res.status(200).json({success: true, data: tradingcard});
    } catch (error) {
        console.error("Error in getting tradingcard: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }
    
    try {
        const tradingcard = await TradingCard.findById(id); // this will return the music with the specified ID
        res.status(200).json({success: true, data: tradingcard});
    } catch (error) {
        console.error("Error in get tradingcard: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.post('/', async (req, res) => {
    const tradingcard = req.body; // the user provides this body JSON

    if(!tradingcard.brand || !tradingcard.name || !tradingcard.set || !tradingcard.price || !tradingcard.year || !tradingcard.image) {
        return res.status(400).json({sucess:false, message: "all fields need to be filled"});
    }

    const newtradingcard = new TradingCard(tradingcard);

    try {
        await newtradingcard.save();

        res.status(201).json({success: true, data: newtradingcard});
    } catch (error) {

        console.error("Error in create tradingcard: ", error.message);
        res.status(500).json({success: false, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        await TradingCard.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "tradingcard deleted"}); 
    } catch (error) {
        console.error("Error in delete tradingcard: ", error.message);
        res.status(404).json({success: false, message: "ID not found"});
    }

});

// PUT is used for updating an object
router.put('/:id', async (req, res) => {
    const {id} = req.params;

    const tradingcard = req.body;

    //this asks the database if there was an object with that id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }

    try {
       const updatedtradingcard = await TradingCard.findByIdAndUpdate(id, tradingcard, {new: true});
       res.status(200).json({success: true, data: updatedtradingcard});  
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});

    }
});

export default router; // we export this router so that we can use it in other files
