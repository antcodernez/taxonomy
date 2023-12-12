const {formLogin, formRegister} = require("../controllers/userController");
// userRouting.js
const express = require("express");
const router = express.Router();


router.get('/', formLogin);
router.get('/register', formRegister);


// Ruta para mostrar la página de login
router.get("/", (req, res) => {
    res.render('auth/login', {

    });
});

// Nueva ruta para mostrar la página de registro
router.get("/register", (req, res) => {
    res.render('auth/register', {

    });
});

module.exports = router;
