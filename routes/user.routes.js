const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
   res.render('auth/login', {
            page: 'Iniciar Sesión',
            cssFile: "/public/css/lappLogin.css"
            // csrfToken: req.csrfToken()
        })
});

router.post("/", (req, res) => {
   res.render('auth/login', {
            page: 'Iniciar Sesión',
            // csrfToken: req.csrfToken()
        })
});

module.exports = router;