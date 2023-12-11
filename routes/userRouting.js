// userRouting.js
const express = require("express");
const router = express.Router();

// Ruta para mostrar la página de login
router.get("/", (req, res) => {
    res.render('auth/login', {
        page: 'Iniciar Sesión',
        cssFile: "/public/css/lappLogin.css"
    });
});

// Nueva ruta para mostrar la página de registro
router.get("/register", (req, res) => {
    res.render('auth/register', {
        page: 'Registro',
        cssFile: "/public/css/appRegister.css"
    });
});

module.exports = router;
