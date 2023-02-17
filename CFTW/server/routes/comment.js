const router = require('express').Router();
const Comment = require("../models/comment");

router.get("/comments", async (req, res) => {
    try {
        let comments = await Comment.find();
        res.json({success: true, comments: comments})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

router.post("/comments", async (req, res) => {
    try {

        let comment = new Comment();
        comment.name = req.body.name
        comment.email = req.body.email
        comment.comment = req.body.comment

        console.log(comment)

        await comment.save();

        res.json({success: true, message: "New comment successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;