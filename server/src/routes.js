const AuthenticationController = require("./controllers/AuthenticationController");

module.exports = (app) => {
    app.post('/api/register', AuthenticationController.register)
}
