const express = require("express");
const {requestAI} = require("../lib/ai-chat");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("homeUser", {
        cssFile: "/public/css/home.css"
    })
});
router.get("/chat", (req, res) => {
    res.render("chat", {
        cssFile: "/public/css/chat.css"
    })
});

router.post("/chat", async (req, res) => {
    const {prompt} = req.body;
    const response = await requestAI(prompt);
    res.json(response);
});


module.exports = router;