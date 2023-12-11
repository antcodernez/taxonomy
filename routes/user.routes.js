// userRouting.js
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
   res.render('auth/login', {
            page: 'Iniciar Sesión',
            cssFile: "/public/css/lappLogin.css"
            // csrfToken: req.csrfToken()
        })
});

// Nueva ruta para mostrar la página de registro
router.get("/register", (req, res) => {
    res.render('auth/register', {
        page: 'Registro',
        cssFile: "/public/css/appRegister.css"
    });
});

module.exports = router;
