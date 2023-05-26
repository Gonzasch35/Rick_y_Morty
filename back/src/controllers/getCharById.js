const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')


const getCharById = async (req, res) => {
    try {
        const {id} = req.params
        console.log(`Se hizo una peticion de id ` + id);
        const response = await axios.get(`${URL}${id}`)
        const data = response.data;
        if (!data) { throw Error(`ID: ${id} Not found!`)
        } else {
            const {id, status, name, species, origin, image, gender} = data
            res.status(200).json({id, status, name, species, origin, image, gender})
        }
    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).json({error: error.message})
        : res.status(500).json({error: error.response.data.error})
    }
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