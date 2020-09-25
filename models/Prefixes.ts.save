const mongoose1 = require('mongoose');
const Schema = mongoose1.Schema;

const guildSchema = new Schema({
    // 'id' field must be first - you can name it whatever you want
    id: {
        type: String,
        required: true
    },
    // 'data' field must be second - you can name it whatever you want
    data: {
        type: Object,
        required: true
    }
});

module.exports = mongoose1.model('Guild', guildSchema);
