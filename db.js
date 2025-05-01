const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.BD_NAME, //Название бд
    process.env.BD_USER, // Юзер
    process.env.BD_PASSWORD, // Пароль от него
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)