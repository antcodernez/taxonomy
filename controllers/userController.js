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