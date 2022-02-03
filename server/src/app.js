const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express(),
      port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/api', (req, res) => {
    res.send({
        message:"Hello"
    })
})
app.post('/api/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! You user was registered`
    })
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
});