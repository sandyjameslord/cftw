const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrewSaveLessonStatusSchema = new Schema({
    lessonID: String,
    userWhoFinishedID: String,
    dateCompleted: String,
});

module.exports = mongoose.model("DrewSaveLessonStatus", DrewSaveLessonStatusSchema);