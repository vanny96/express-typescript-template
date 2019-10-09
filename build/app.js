"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var index_1 = __importDefault(require("./routers/index"));
var app = express();
// Database connection
var mongoDbUrl = "mongodb://localhost:27017/projectName";
mongoose.connect(mongoDbUrl, { useNewUrlParser: true });
var db = mongoose.connection;
// Routers config
app.use('/', index_1.default);
// Listen on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
