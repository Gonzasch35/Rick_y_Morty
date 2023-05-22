const express = require('express')
const mainRouter = require('./routes/index')

const server = express()
const PORT = 3001;

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

 server.use("/rickandmorty", mainRouter)

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
    console.log(server);
})




































/* const http = require('http')
const {getCharById} = require('./controllers/getCharById')

http.createServer((req, res) => {
    const {url} = req;

    res.setHeader('Access-Control-Allow-Origin', '*');


    if(url.includes(`/rickandmorty/character`)) {
        const id = url.split('/')[3]
        getCharById(res, id)
    }

/*     if(url.includes(`/rickandmorty/character`)) {
        const id = url.split('/')[3]
        const character = data[(id-1)]


        if(character){
        res.writeHead(200, {'Content-Type': 'aplication/json'})
        res.end(JSON.stringify(character))
        } else {
            res.statusCode = 404;
            res.end('Personaje Invalido')
        }
    } */
/* }).listen(3001, 'localhost') */ 