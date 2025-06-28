const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config(); // Load .env variables mongoose

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const MONGOURL = process.env.MONGOURL;

// MongoDB connection
mongoose.connect(MONGOURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
});

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/about', (req, res) => {
    res.send("about page");
});

app.post('/post', (req, res) => {
    res.send("post request received");
});

// User schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const UserModel = mongoose.model('Users', userSchema);

app.get('/getUsers', async (req, res) => {
    try {
        const userData = await UserModel.find();
        res.json(userData);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});


//post request to add a user

app.post('/adduser', async (req, res) => {
    try {
        const { name, age } = req.body;

        const newUser = new UserModel({ name, age });
        await newUser.save();

        res.status(201).json({ message: "User added successfully", user: newUser });
     } catch (err) {
        res.status(500).json({ error: "Failed to add user" });
     }
});
    
