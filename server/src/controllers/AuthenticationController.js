const { User } = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            console.log(userJson)
            res.send({
              user: userJson,
              token: jwt.sign(userJson, config.authentication.jwtSecret)
            })
            
        } catch (err) {
            res.status(404).send({
                message: "An error has occured during register"
            })
        }

    },

    async login(req, res)  {
        try {
            const {email, password } = req.body
            
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            const userJson = user.toJSON()
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordCorrect = (password === user.password)
            if (!isPasswordCorrect) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            res.send({
                user: userJson,
                token: jwt.sign(userJson, config.authentication.jwtSecret)
                }
            )
        } catch (err) {
            res.status(500).send({
                message: "An error has occured during login"
            })
        }
    }
}
  