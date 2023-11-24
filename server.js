const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
