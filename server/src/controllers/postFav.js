const {Favorite} = require('../DB_connection')

const postFav = async (req, res) => {
    try {
        const {name, status, image, species, gender} = req.body
        if(!name || !status || !image || !species || !gender) res.status(401).json('Faltan datos')
        else {
            await Favorite.findOrCreate({
                where: {name, status, image, species, gender},
                defaults: {name, status, image, species, gender}
            })
            res.status(200).json(await Favorite.findAll())
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postFav