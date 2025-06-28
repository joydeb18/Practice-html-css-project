const express = require('express'); // Express.js framework ko import karna
const app = express(); // Express application banana

const PORT = 3000; // Port number define karna jis par server chalega

app.get('/', (req, res) => {
    // GET request ke liye route handler define karna root URL ('/') par
    // req: request object (client se aane wali request ki details)
    // res: response object (client ko response bhejne ke liye)
    res.send('Hello, World!'); // Client ko 'Hello, World!' string bhejna
});

app.get('/about', (req, res) => {
    res.send('About US');
});

app.get('/contact', (req, res) => {
    res.send('Contact US');
});

app.listen(PORT, () => {
    // Server ko ek specific port par start karna
    console.log(`Server is running on http://localhost:${PORT}`); // Console mein message print karna jab server start ho jaye
});
