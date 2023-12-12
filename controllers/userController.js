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
