const express = require('express');
const mongoose = require('mongoose');

const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');

const app = express();
const port = 8000;

app.use(express.json());

mongoose.connect('mongodb://localhost/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/artists', artists);
app.use('/albums', albums);
app.use('/tracks', tracks);

app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});