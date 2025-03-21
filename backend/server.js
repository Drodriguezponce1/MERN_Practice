//const express = require('express');

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from "path";

//importing routes
import musicRoutes from './routes/music.route.js';
import mangaRoutes from './routes/manga.route.js';
import tradingCardRoutes from './routes/tradingcards.route.js';
import videoGameRoutes from './routes/videogames.route.js';

//setups
const __dirname = path.resolve();

dotenv.config(); // this will load the .env file and make the variables available to the process.env object

const app = express(); // creating an express object
const PORT = process.env.PORT || 5000; // setting the port number

app.use(express.json()); // this will allow us to parse JSON data in the body of the request

// this simply listens to the port 5000 and logs a message to the console
// this is the entry point of our server
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
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
app.use('/api/music', musicRoutes);

//MANGA RELATED
app.use('/api/manga', mangaRoutes);

//TRADING CARDS RELATED
app.use('/api/tradingcard', tradingCardRoutes);

// VIDEO GAMES RELATED
app.use('/api/videogame', videoGameRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
}
