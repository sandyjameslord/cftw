const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrewSaveContentSchema = new Schema({
    nameOfLesson: String,
    creator: String,
    dateCreated: String,
    keyWords: String,
    htmlContent: String,
    cssContent: String,
    javaScriptContent: String,
});

module.exports = mongoose.model("DrewSaveContent", DrewSaveContentSchema);