const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')


const getCharById = (req, res) => {
    const {id} = req.params
    console.log(id);
    axios.get(`${URL}${id}`)
    .then(response => {
        const {id, status, name, species, origin, image, gender} = response.data
        if(!response.data){
            res.status(404).json('Not found!')
        } else{
            res.status(200).json({id, status, name, species, origin, image, gender})
        }
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
}

module.exports = {
    getCharById,
}









/* const axios = require('axios')

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => 
    { return {id: id,
             name: data.name,
              gender: data.gender,
               species: data.species,
                origin: {name: data.origin.name,
                        url: data.origin.url},
                 image: data.image,
                  status: data.status}})
    
    .then(data => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
    })
    .catch((error) => {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end({message: error})
    })
}


module.exports = {
    getCharById,
} */