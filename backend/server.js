//const express = require('express');

import express from 'express';

const app = express(); // creating an express object

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});


app.get('/', (req, res) => {
    res.send('Server is up and ready to go');
});