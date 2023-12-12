const { check, validationResult } = require("express-validator");
const { User } = require('../db/models/index.models');
const { jwt, generatedID } = require("jsonwebtoken");
const { models } = require("../lib/sequelize")

const formRegister = async (req, res) => {
    res.render('auth/register', {
        page: 'Registro',
        cssFile: "/public/css/appRegister.css",
        // csrfToken: req.csrfToken()
    });
}

const formLogin = async (req, res) => {
    res.render('auth/login', {
        page: 'Inicio de Sesion',
        cssFile: "/public/css/lappLogin.css",
        // csrfToken: req.csrfToken()
    });
}

const registerUser = async (req, res, next) => {
    try {
        console.log("Usuario intentado Registrarse");
        console.log(req.body);
        const { name, email, password } = req.body;
        console.log(name);
        console.log(email);

        await check("name").notEmpty().withMessage("Name field is required").run(req);
        await check("email").notEmpty().withMessage("Email field is required").isEmail().withMessage("The value must be in the format user@domain.ext").run(req);
        await check('password').notEmpty().withMessage("Password field is required").isLength({ min: 8 }).withMessage('Password must contain at least 8 characters').isLength({ max: 20 }).withMessage('Password must contain less than 20 characters').equals(req.body.passwordRepeat).withMessage('Both passwords must be the same').run(req);

        const resultValidation = validationResult(req);

        if (resultValidation.isEmpty()) {
            const token = generatedID();

            console.log(`Attempting to insert user ${name}, with email: ${email}, password: ${password}, and token: ${token}`);

            const userExist = await models.User.findOne({ where: { email: email } });
            console.log(userExist);
            
            if (userExist && email) {
                return res.render("auth/register.pug", {
                    page: `Creating New Account`,
                    errors: [{ msg: `The User with: ${email} already exists` }],
                    User: {
                        name,
                        email,
                        password
                    }
                });
            }

            try {
                console.log("Attempting to save data in the database");
                const newUser = await models.User.create({
                    name,
                    email,
                    password,
                    token
                });

                // Resto del código...

                // Sending configuration email
                emailRegister({
                    name,
                    email,
                    token
                });

                res.render('templates/message.pug', {
                    page: "User Created Successfully",
                    message: `We have sent you an email to: ${email}, please verify your account`,
                    type: "info"
                });
            } catch (error) {
                console.error("Error al intentar guardar el nuevo usuario:", error);
                return res.status(500).json({ error: "Error al intentar guardar el nuevo usuario" });
            }
        } else {
            return res.render("auth/register.pug", {
                page: `Creating New Account`,
                errors: resultValidation.array(),
                User: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            });
        }
    } catch (e) {
        next(e);
    }
};




module.exports = {
    formRegister,
    registerUser,
    formLogin
};
