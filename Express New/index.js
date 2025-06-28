const express = require('express');

const app = express();
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
})

app.get('/user/:username', (req, res) =>{
    const username = req.params.username;
    res.send(`Welcome, ${username}!`);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://Localhost:${PORT}`);    
})