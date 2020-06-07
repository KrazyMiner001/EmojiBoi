const { MongoClient } = require('salvage.db')
const { mongodb } = require('./config.json');
const db = new MongoClient({
    schema: {
        name: 'prefixes'
    },
    mongoURI: mongodb

})
module.exports = db;