import express from 'express';
import VideoGame from '../models/videogames.model.js'; // we import the music model so that we can use it in the routes (double dot means go back one folder)
import mongoose, { mongo } from 'mongoose';

const router = express.Router(); // we reroute the api calls to this router

router.get('/', async (req, res) => {
    try {
        const game = await VideoGame.find({}); // this will return all the music in the database
        res.status(200).json({success: true, data: game});
    } catch (error) {
        console.error("Error in getting Game: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }
    
    try {
        const game = await VideoGame.findById(id); // this will return the music with the specified ID
        res.status(200).json({success: true, data: game});
    } catch (error) {
        console.error("Error in get Game: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.post('/', async (req, res) => {
    const game = req.body; // the user provides this body JSON

    if(!game.name || !game.platform || !game.rate || !game.publisher || !game.price || !game.year || !game.image) {
        return res.status(400).json({sucess:false, message: "all fields need to be filled"});
    }

    const newGame = new VideoGame(game);

    try {
        await newGame.save();

        res.status(201).json({success: true, data: newGame});
    } catch (error) {

        console.error("Error in create Game: ", error.message);
        res.status(500).json({success: false, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        await VideoGame.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Game deleted with id: " + id}); 
    } catch (error) {
        console.error("Error in delete game: ", error.message);
        res.status(404).json({success: false, message: "ID not found"});
    }

});

// PUT is used for updating an object
router.put('/:id', async (req, res) => {
    const {id} = req.params;

    const game = req.body;

    //this asks the database if there was an object with that id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }

    try {
       const updatedGame = await VideoGame.findByIdAndUpdate(id, game, {new: true});
       res.status(200).json({success: true, data: updatedGame});  
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});

    }
});

export default router; // we export this router so that we can use it in other files
