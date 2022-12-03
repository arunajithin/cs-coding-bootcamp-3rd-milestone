const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const usersRoutes = require('./routes/users-routes.js');
const productsRoutes = require('./routes/products-routes.js');

// Configure middleware for express
server.use( bodyParser.urlencoded( {extended: false} ) );
server.use( bodyParser.json() );

const dbURL = process.env.DB_URL;

const dbConfig = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
};

mongoose
.connect(dbURL, dbConfig)
.then(
    function(){
        console.log('DB is connected')
    }
)
.catch(
    function(dbError){
        console.log('Connection error', dbError)
    }
);


server.get(
    '/',
    function(req, res){
        res.send("Hello!");
    }
);

server.get(
    '/about',
    function(req, res){
        res.send("<h1>About Us</h1>");
    }
);

server.get(
    '/contact',
    function(req, res){
        res.send("<h1>Contact Us</h1>");
    }
);

server.get(
    '/products',
    function(req, res){
        res.send("<h1>Products</h1>");
    }
);

server.use('/users', usersRoutes);
server.use('/products', productsRoutes);

server.listen(
    3001,
    function(){
        console.log('Running on http://localhost:3001');
    }
);