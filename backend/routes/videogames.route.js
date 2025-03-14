import express from 'express';
import Manga from '../models/manga.model.js'; // we import the music model so that we can use it in the routes (double dot means go back one folder)
import mongoose, { mongo } from 'mongoose';

const router = express.Router(); // we reroute the api calls to this router

router.get('/', async (req, res) => {
    try {
        const manga = await Manga.find({}); // this will return all the music in the database
        res.status(200).json({success: true, data: manga});
    } catch (error) {
        console.error("Error in getting Manga: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }
    
    try {
        const manga = await Manga.findById(id); // this will return the music with the specified ID
        res.status(200).json({success: true, data: manga});
    } catch (error) {
        console.error("Error in get Manga: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

router.post('/', async (req, res) => {
    const manga = req.body; // the user provides this body JSON

    if(!manga.name || !manga.publisher || !manga.genre || !manga.year || !manga.pages || !manga.price || !manga.image) {
        return res.status(400).json({sucess:false, message: "all fields need to be filled"});
    }

    const newManga = new Manga(manga);

    try {
        await newManga.save();

        res.status(201).json({success: true, data: newManga});
    } catch (error) {

        console.error("Error in create Manga: ", error.message);
        res.status(500).json({success: false, message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        await Manga.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Manga deleted"}); 
    } catch (error) {
        console.error("Error in delete manga: ", error.message);
        res.status(404).json({success: false, message: "ID not found"});
    }

});

// PUT is used for updating an object
router.put('/:id', async (req, res) => {
    const {id} = req.params;

    const manga = req.body;

    //this asks the database if there was an object with that id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "ID not found"});
    }

    try {
       const updatedManga = await Manga.findByIdAndUpdate(id, manga, {new: true});
       res.status(200).json({success: true, data: updatedManga});  
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});

    }
});

export default router; // we export this router so that we can use it in other files
