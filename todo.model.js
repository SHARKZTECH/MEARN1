const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Todo = new Schema({
    text: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('Todo', Todo);