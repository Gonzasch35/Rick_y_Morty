const express = require('express')
const mainRouter = require('./routes/index')

const server = express()

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

 server.use("/rickandmorty", mainRouter)  // ? en caso de que la request sea a /richandmorty se redirecciona a mainRouter


module.exports = server;