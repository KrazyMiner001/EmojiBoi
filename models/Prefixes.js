const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    prefix: String
})
module.exports = mongoose.model("prefixes", Schema)