const router = require('express').Router();
const WebDevLesson = require("../models/webDevLesson");

router.get("/webDevLessons", async (req, res) => {
    try {
        let webDevLessons = await WebDevLesson.find();
        res.json({success: true, webDevLessons: webDevLessons})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single webDevLesson
// router.post("/shiftNotes", upload.single("photo"), async (req, res) => {
router.post("/webDevLessons", async (req, res) => {
    try {

        let webDevLesson = new WebDevLesson();
        webDevLesson.nameOfLesson = req.body.nameOfLesson
        webDevLesson.creator = req.body.creator
        webDevLesson.keyWords = req.body.keyWords
        webDevLesson.lessonLevel = req.body.lessonLevel

        webDevLesson.htmlContent = req.body.htmlContent
        webDevLesson.cssContent = req.body.cssContent
        webDevLesson.javaScriptContent = req.body.javaScriptContent

        await webDevLesson.save();

        res.json({success: true, message: "New webDevLesson successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;