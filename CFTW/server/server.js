const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// const PORT = process.env.PORT || 3000;

const User = require("./models/user");

mongoose.connect(process.env.DATABASE, 
    { useUnifiedTopology: true, useUnifiedTopology: true }, 
    (err) => {
        if (err) {console.log(err)}
        else {console.log('connected to the database')}
    }
)

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const userRoutes = require("./routes/auth");
app.use(userRoutes);

const webDevLessons = require("./routes/webDevLesson");
app.use( webDevLessons);

const drewSaveContents = require("./routes/drewSaveContent");
app.use(drewSaveContents);

const drewSaveLessonStatuses = require("./routes/drewSaveLessonStatus");
app.use(drewSaveLessonStatuses);

const comments = require("./routes/comment");
app.use(comments);

// app.listen(PORT, (err) => {
//     if (err) {console.log(err)}
//     else {console.log("listening on PORT:", PORT)}
// });

module.exports = {
    path: "/api",
    handler: app
}
