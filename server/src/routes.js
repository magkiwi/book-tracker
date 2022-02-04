module.exports = (app) => {
    app.post('/api/register', (req, res) => {
        res.send({
            message: `Hello ${req.body.email}! You user was registered`
        })
    })
}
