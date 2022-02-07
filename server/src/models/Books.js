module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('Book', {
      title:  Sequelize.STRING,
      author: Sequelize.STRING,
      image: Sequelize.STRING,
      year: Sequelize.INTEGER,
      pages: Sequelize.INTEGER,
      category: Sequelize.STRING
    })

    return User
  };
  