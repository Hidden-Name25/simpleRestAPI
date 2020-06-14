require('dotenv/config'); //khusus dot env
const mysql = require('mysql');
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_PASS,
    password : process.env.PASS,
    database : process.env.DB_NAME,
})

db.connect((error)=>{
    if (error) console.log(error);
})

module.exports = db;