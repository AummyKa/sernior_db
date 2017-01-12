const express = require('express');
const mongoose = require('mongoose')

const server = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

server.use(bodyParser.urlencoded({ extended: true, limit: '512mb' }))
server.use(bodyParser.json({ limit: '512mb' }))
server.use(cookieParser())
server.use(methodOverride())
server.use(cors())

mongoose.connect('mongodb://localhost/tutorialdb');

const People = require('./models/people.model')

server.get('/', (req, res) => {
    People.find((err, result) => {
        res.send(result)
    })
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log("listening on port", port);
});
