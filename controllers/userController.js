const formRegister = async( req, res) => {
    res.render('auth/register', {
            page: 'Crear cuenta',
            cssFile: "/public/css/appRegister.css",
            // csrfToken: req.csrfToken()
        });
}

const registerUser = async (req, res) => {
    console.log(req.body);
}

module.exports = {
    formRegister,
    registerUser
};