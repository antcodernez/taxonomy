<<<<<<< HEAD
const { check, validationResult }= require ("express-validator");
const { generatedID, jwtToken } =require("../lib/tokens.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

const formLogin = (req, res) => {
    res.render('auth/login.pug', {
        page: 'Inicio de sesion',
        isLogged: false,
        cssFile: "/public/css/lappLogin.css"
      })
    }

    const formRegister = (request, response) => {
        response.render("auth/register.pug", { page: "Registro", cssFile: "/public/css/appRegister.css" });
      };

module.exports = {formLogin, formRegister}
=======
const formRegister = async( req, res) => {
    res.render('auth/register', {
            page: 'Crear cuenta',
            cssFile: "/public/css/appRegister.css",
            // csrfToken: req.csrfToken()
        });
}

const registerUser = async (req, res, next) => {
    try
        {
            const body = req.body;
            console.log(newUser);
            const newUser = await models.User.create(body); //metodo crea un nuevo usuario
            // res.redirect("auth/login");
        }
    catch(e)
        {
            next(e);
        }
}

module.exports = {
    formRegister,
    registerUser
};
>>>>>>> 6c3f8e99264cf9b860a970f4e7d5944044c08cb5
