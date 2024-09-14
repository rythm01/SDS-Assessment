const Sequelize = require("sequelize");
require('dotenv').config();

const USER = process.env.DB_USER || "ubuntu"
const PASSWORD = process.env.PASSWORD || "Ridham@693#"
const HOST = process.env.HOST || "localhost"
const DATABASE = process.env.DATABASE || "SDSDB"

const sequelize = new Sequelize(DATABASE,USER,PASSWORD, 
    {
        host: HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
});

module.exports = sequelize;