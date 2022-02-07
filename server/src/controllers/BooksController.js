const { Book } = require('../models');


module.exports = {
    async index (req, res)  {
        try {
           const book = await Book.findAll({
               limit: 15
           })
           res.send(book)
        } catch (err) {
           res.status(500).send({
               error: "An error has occured"
           })
        }
    },
    async post_book(req, res)  {
        try {
           const book = await Book.create(req.body)
           res.send(book)
        } catch (err) {
           res.status(500).send({
               error: "An error has occured"
           })
        }
    }
}
  