// Create web server application

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
const comments = [];

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;

    comments.push(comment);

    res.json(comment);
});

app.listen(port, () => {
    console.log(`Comments service listening on port ${port}`);
});