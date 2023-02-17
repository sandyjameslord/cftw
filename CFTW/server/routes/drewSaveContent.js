const router = require('express').Router();
const DrewSaveContent = require("../models/drewSaveContent");

router.get("/drewSaveContents", async (req, res) => {
    try {
        let drewSaveContents = await DrewSaveContent.find();
        res.json({success: true, drewSaveContents: drewSaveContents})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

router.post("/drewSaveContents", async (req, res) => {
    try {

        let drewSaveContent = new DrewSaveContent();
        drewSaveContent.nameOfLesson = req.body.nameOfLesson
        drewSaveContent.creator = req.body.creator
        drewSaveContent.keyWords = req.body.keyWords
        drewSaveContent.dateCreated = req.body.dateCreated
        drewSaveContent.htmlContent = req.body.htmlContent
        drewSaveContent.cssContent = req.body.cssContent
        drewSaveContent.javaScriptContent = req.body.javaScriptContent

        await drewSaveContent.save();

        res.json({success: true, message: "New drewSaveContent successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;