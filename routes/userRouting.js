const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
   res.render('auth/login', {
            pagina: 'Iniciar Sesión',
            // csrfToken: req.csrfToken()
        })
});


module.exports = router;