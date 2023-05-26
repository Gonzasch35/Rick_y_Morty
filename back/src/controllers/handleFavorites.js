
let myFavorites = []

const postFav = (req, res) => {
    try {
        const charater = req.body
    
        const characterRepeat = myFavorites.find(char=> char.id == charater.id)
        if(characterRepeat) throw Error('Personaje repetido') 
    
        myFavorites.push(charater)

        return res.status(200).json(myFavorites)
        
    } catch (error) {
        return res.status(404).send(error.message)
    }
}




const deleteFav = (req, res) => {
    const {id} = req.params

    myFavorites = myFavorites.filter(char=> char.id !== Number(id))

    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
}