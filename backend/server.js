//const express = require('express');

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config(); // this will load the .env file and make the variables available to the process.env object

const app = express(); // creating an express object

// this simply listens to the port 5000 and logs a message to the console
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});

//my first GET method just to see
app.get('/test', (req, res) => {
    res.send('Server is up and ready to go');
});

//lets create a new route for our database
app.get('/products', (req, res) => {
    res.send('Server is up and ready to go');
});

