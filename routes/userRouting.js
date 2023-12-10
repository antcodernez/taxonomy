const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
   res.render('auth/login', {
            page: 'Iniciar Sesión',
            // csrfToken: req.csrfToken()
        })
});

router.get('/', (request, response) => response.render("layout/index.pug", {page:"home"}));

module.exports = router;