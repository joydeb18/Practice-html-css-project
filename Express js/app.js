const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); //To Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;
const MONGOURL = process.env.MONGOURL;

app.use(express.json()); //To parse JSON request bodies

//mongo db connection

mongoose.connect(MONGOURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }); 

//Importing Routes
app.get('/', (req, res) => {
    res.send('Hello')
});
app.get('/about', (req, res) => {
    res.send('About Page');
});

//User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Optionally: A simple POST test route
app.post('/post', (req, res) => res.send("post request received"));