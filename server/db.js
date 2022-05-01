const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    dialect: "postgres",
});

module.exports = sequelize;
