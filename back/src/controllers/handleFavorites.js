
let myFavorites = []

const postFav = (req, res) => {
    const charater = req.body
    myFavorites.push(charater)

    res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params

    myFavorites = myFavorites.filter(char=> char.id !== id)

    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
}