// userRouting.js
const express = require("express");
const router = express.Router();
const { formRegister, registerUser } = require("../controllers/userController");

router.get("/login", async (req, res) => {
   res.render('auth/login', {
            page: 'Iniciar Sesión',
            cssFile: "/public/css/lappLogin.css",
            // csrfToken: req.csrfToken()
        })
});

// Nueva ruta para mostrar la página de registro
router.get("/register", formRegister);

router.post("/register", registerUser);

module.exports = router;
