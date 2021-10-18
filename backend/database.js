const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'broy',
    user: 'root',
    password: ''
})

module.exports = connection