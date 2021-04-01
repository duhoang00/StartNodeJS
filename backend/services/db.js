let mongoose = require('mongoose');
require('dotenv').config();

function connectToDb() {
    const uri = process.env.DB_CONNECTION;
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},  function(err) {
        if (err) {
            console.log('connect to db failed');
            console.log(err);
        } else {
            console.log('connection to db is successful');
        }
    });
}

module.exports.connectToDb = connectToDb;