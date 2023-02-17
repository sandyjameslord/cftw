const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: String,
    email: String,
    comment: String,
});

module.exports = mongoose.model("Comment", CommentSchema);