const AuthenticationController = require("./controllers/AuthenticationController");
const BooksController = require("./controllers/BooksController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

module.exports = (app) => {
    app.post('/api/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/api/login', 
        AuthenticationController.login)

    app.get('/api/books',
        BooksController.index)

    app.post('/api/books', 
        BooksController.post_book)
}
