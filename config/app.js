const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000; 

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '../views'));

module.exports = app;
app.set('port', port);