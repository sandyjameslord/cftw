const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebDevLessonSchema = new Schema({
    nameOfLesson: String,
    creator: String,
    dateCreated: String,
    keyWords: String,
    lessonLevel: String,
    htmlContent: String,
    cssContent: String,
    javaScriptContent: String,
});

module.exports = mongoose.model("WebDevLesson", WebDevLessonSchema);
