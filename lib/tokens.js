const jwt =require('jsonwebtoken');
//Genera el token y muy dificilmente va a duplicarse 
const generatedID= () => Date.now().toString(32) + Math.random().toString(32).substring(3);
//Aquí se genera el jwt con las variables de .env, aquí tú defines las variables, lo último es la firma y en cuanto tiempo expira la sesión 
const jwtToken = (userId) => jwt.sign(
    {
        domain: process.env.JWT_DOMAIN,
        author: process.env.JWT_AUTHOR,
        signature: process.env.JWT_SIGNATURE,
        year: process.env.JWT_YEAR,
        userId
    }, process.env.JWT_HASHSTRING, {expiresIn: '1d'}
);

module.exports = {generatedID, jwtToken}