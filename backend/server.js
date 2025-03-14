//const express = require('express');

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Music from './models/music.model.js';
import mongoose, { mongo } from 'mongoose';

//setups

dotenv.config(); // this will load the .env file and make the variables available to the process.env object

const app = express(); // creating an express object

app.use(express.json()); // this will allow us to parse JSON data in the body of the request

// this simply listens to the port 5000 and logs a message to the console
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});


//=========================================================

//now we make apis

//my first GET method just to see
app.get('/test', (req, res) => {
    res.send('Server is up and ready to go');
});

//lets create a new route for our database
app.get('/products', (req, res) => {
    res.send('Server is up and ready to go PRODUCTS');
});

//lets create a new route for our music database

//MUSIC RELATED

app.get('/api/music', async (req, res) => {
    try {
        const music = await Music.find({}); // this will return all the music in the database
        res.status(200).json({success: true, data: music});
    } catch (error) {
        console.error("Error in get music: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }    
});

app.post('/api/music', async (req, res) => {
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

app.delete('/api/music/:id', async (req, res) => {
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
app.put('/api/music/:id', async (req, res) => {
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
