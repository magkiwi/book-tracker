const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })

        const {error, value} = schema.validate(req.body)
        if (error) {
            res.status(400).send({
                error: error.details[0].message
            })
            
        } else {
            next()
        }
    }
}