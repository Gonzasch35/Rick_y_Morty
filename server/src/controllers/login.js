const {User} = require('../DB_connection');

const login = async (req, res) => {
    try {
        const {email, password} = req.query
        if(!email || !password) res.status(400).json('Faltan datos')
        else {
            const userFound = await User.findOne({where: {email}})  
            if(!userFound) res.status(404).json('Usuario no encontrado')
            else if(userFound.password !== password) res.status(400).json('Contraseña incorrecta')
            else res.status(200).json({access: true})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = login