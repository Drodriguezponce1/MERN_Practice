import express from 'express';
import Music from '../models/music.model.js'; // we import the music model so that we can use it in the routes (double dot means go back one folder)
import mongoose, { mongo } from 'mongoose';

const router = express.Router(); // we reroute the api calls to this router

router.get('/', async (req, res) => {
    try {
        const music = await Music.find({}); // this will return all the music in the database
        res.status(200).json({success: true, data: music});
    } catch (error) {
        console.error("Error in get music: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }
    
    try {
        const music = await Music.findById(id); // this will return the music with the specified ID
        res.status(200).json({success: true, data: music});
    } catch (error) {
        console.error("Error in get music: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.post('/', async (req, res) => {
    const music = req.body; // the user provides this body JSON

    if(!music.name || !music.artist || !music.genre || !music.year || !music.price || !music.format || !music.image) {
        return res.status(400).json({sucess:false, message: "all fields need to be filled"});
    }

    const newMusic = new Music(music)

    try {
        await newMusic.save();

        newMusic.
        res.status(201).json({success: true, data: newMusic});
    } catch (error) {

        console.error("Error in create music: ", error.message);
        res.status(500).json({success: false, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        await Music.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Music deleted"}); 
    } catch (error) {
        console.error("Error in delete music: ", error.message);
        res.status(404).json({success: false, message: "ID not found"});
    }

});

// PUT is used for updating an object
router.put('/:id', async (req, res) => {
    const {id} = req.params;

    const music = req.body;

    //this asks the database if there was an object with that id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }

    try {
       const updatedMusic = await Music.findByIdAndUpdate(id, music, {new: true});
       res.status(200).json({success: true, data: updatedMusic});  
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});

    }
});

export default router; // we export this router so that we can use it in other files
