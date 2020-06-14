require('dotenv/config'); // khusus dotenv 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./src/config/db');

app.listen(port,(error)=>{
    if(error) {
        console.error(error);
    }
    console.log(`Server Running On Port ${port} \n`)
});

db.query = db;