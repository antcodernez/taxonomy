// userRouting.js
const express = require("express");
const router = express.Router();
const { formRegister, registerUser, formLogin } = require("../controllers/userController");



router.get("/login", formLogin);

// Nueva ruta para mostrar la página de registro
router.get("/register", formRegister);
router.post('/register', registerUser);


module.exports = router;
