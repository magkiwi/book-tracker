const fs = require('fs')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

const models = [
  require('./user')(sequelize, Sequelize),
];

models.forEach(model => {
  db[model.name] = model;
});

models.forEach(model => {

  if (db[model.name].associate) {
    db[model.name].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
