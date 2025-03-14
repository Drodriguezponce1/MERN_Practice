//const express = require('express');

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import musicRoutes from './routes/music.route.js';
//setups

dotenv.config(); // this will load the .env file and make the variables available to the process.env object

const app = express(); // creating an express object

app.use(express.json()); // this will allow us to parse JSON data in the body of the request

// this simply listens to the port 5000 and logs a message to the console
// this is the entry point of our server
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});


//=========================================================

//now we make apis

//my first GET method just to see
/*app.get('/test', (req, res) => {
    res.send('Server is up and ready to go');
});

//lets create a new route for our database
app.get('/products', (req, res) => {
    res.send('Server is up and ready to go PRODUCTS');
});*/

//lets create a new route for our music database

//MUSIC RELATED

app.use('/api/music', musicRoutes);
