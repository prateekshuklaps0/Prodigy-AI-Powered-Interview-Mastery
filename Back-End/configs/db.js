const mongoose = require('mongoose');
require('dotenv').config();

const connection = async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log('Connection with the DB established');
    }catch(err){
        console.log('Something went wrong with DB connection');
    }
}

module.exports = connection;
