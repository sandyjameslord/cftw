
const findData = function findData() {
    let data = {
        "webDevLesson" : [1, "Web Dev Lesson"], 
        "nameOfLesson" : [0, "Name of Lesson"], 
        "creator" : [0, "Creator"],
        "keyWords" : [0, "KeyWords"],
        "lessonLevel": [0, "Lesson Level, e.g., bAHTML01"],
        "htmlContent" : [0, "HTML Content"],
        "cssContent" : [0, "CSS Content"],
        "javaScriptContent" : [0, "JavaScript Content"],
    }
    return data
}

const displayDate = function displayDate(dateNum) {
    let date = new Date(parseInt(dateNum))
    let day = `${date.getDate()}`.length > 1 ? `${date.getDate()}` : `0${date.getDate()}`
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = `${months[date.getMonth()]}`
    let year = `${date.getFullYear()}`.substring(2)
    return `${day}${month}${year}`
}

const log = function log(params) {
    for (let i = 0; i < params.length; i++) {

    }
}

module.exports = {
    displayDate,
    findData,
    log,
}