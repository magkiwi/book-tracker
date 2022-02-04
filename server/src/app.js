const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const { sequelize } = require('./models');
const config = require('./config/config')

const app = express(),
      port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)


sequelize.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Server listening on the port: ${port}`);
    });
})
