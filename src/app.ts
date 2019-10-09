import express = require('express');
import mongoose = require('mongoose');
import cors = require('cors');

import indexRouter from './routers/index';

const app = express();

// Database connection
const mongoDbUrl = "mongodb://localhost:27017/projectName";
mongoose.connect(mongoDbUrl, { useNewUrlParser: true });
var db = mongoose.connection;

// Configure app Cross Origin Resource Sharing
app.use(cors());

// Configure app to receive body as json
app.use(express.json());

// Routers config
app.use('/', indexRouter);

// Listen on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});