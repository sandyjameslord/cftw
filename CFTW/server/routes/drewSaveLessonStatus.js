const router = require('express').Router();
const DrewSaveLessonStatus = require("../models/drewSaveLessonStatus");

// const findData = require("../middleware/displayMethods")

// // get all drewSaveContents
router.get("/drewSaveLessonStatuses", async (req, res) => {
    try {
        let drewSaveLessonStatuses = await DrewSaveLessonStatus.find();
        res.json({success: true, drewSaveLessonStatuses: drewSaveLessonStatuses})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single drewSaveContent
// router.post("/shiftNotes", upload.single("photo"), async (req, res) => {
router.post("/drewSaveLessonStatuses", async (req, res) => {
    try {

        let drewSaveLessonStatus = new DrewSaveLessonStatus();
        drewSaveLessonStatus.lessonID = req.body.lessonID
        drewSaveLessonStatus.userWhoFinishedID = req.body.userWhoFinishedID
        drewSaveLessonStatus.dateCompleted = req.body.dateCompleted

        await drewSaveLessonStatus.save();

        res.json({success: true, message: "New drewSaveLessonStatus successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;