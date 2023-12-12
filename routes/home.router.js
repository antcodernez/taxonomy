const express = require("express");
const {} = require("../lib/ai-chat");
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

router.post("/chat", (req, res) => {
    
});


module.exports = router;