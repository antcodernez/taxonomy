const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
   res.render('auth/login', {
            page: 'Iniciar Sesión',
            // csrfToken: req.csrfToken()
        })
});


module.exports = router;