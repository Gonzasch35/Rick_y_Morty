const {Favorite} = require('../DB_connection')

const deleteFav = async (req,res) => {
    try {
        const {id} = req.params
        const fav = await Favorite.findByPk(id)
        await fav.destroy();
        res.status(200).json(Favorite)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = deleteFav