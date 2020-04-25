const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'belajar_backend'
  });

db.query('SELECT 1=1 as result', (err, result) => {
    if (err) throw err;
    else console.log("Connected to Database")
})

module.exports = db;