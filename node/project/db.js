const db = require('knex')({
    client: 'mysql',
    connection:{
        host : process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_DB
    }
})

module.exports = db