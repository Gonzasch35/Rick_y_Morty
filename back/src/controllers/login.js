const users = require('../utils/users')


const login = (req, res) => {
    const {email, password} = req.query;

    const userReal = users.find((user) => user.email === email && user.password === password)

    if(userReal){
        return res.status(200).json({access: true})
    }else {
        return res.status(200).json({access: false})
    }
}
module.exports = {
    login,
}
