const express = require("express");
const app = express();
const db = require("./util/database");
const booksRoutes = require("./routes/sales");
const bodyParser = require("body-parser");
app.use( bodyParser.json()); // for JSON input data
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use( (req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Can set specific methods allowed (Can say '*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // Again can use wild card (*)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use( booksRoutes.routes);


const path = require("path");
const http = require("http");

// app.use( bodyParser.urlencoded({extended: false})); // middleware for body
let port = 8000;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);