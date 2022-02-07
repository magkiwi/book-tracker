module.exports = {
    port: process.env.PORT || 5000,
    db: {
      database: process.env.DB_NAME || "book",
      user: process.env.DB_USER || "book",
      password: process.env.DB_PASS || "book",
      options: {
        dialect: process.env.DIALECT || "sqlite",
        host: process.env.HOST || "localhost",
        storage: "./book.sqlite",
      },
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
  };
  