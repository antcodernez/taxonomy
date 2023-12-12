const boom =  require("@hapi/boom");

//Necesitamos configurar un middleware dinamico, yo quiero recibir el schema que voy a validar y la propiedad
function validatorHandler(schema, property)
{
  // voy a validar de cada request alguna propiedad en especifico, sacar del request la informacion y aplicar un schema, vamos a usar closures
  //Voy a retornar una funcion que tenga el formato de un middleware
  return (req, res, next) => {
    //Este es el formato porque necesito construir middlewares dinamicos
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false});
    if(error)
      {
        next(boom.badRequest(error)); //Si no jala la enviamos a los mi
      }
    next();
  }
}

//logica para validar datos que nos envian desde el cliente

module.exports = {validatorHandler};


// schema.validate(data, {AbortEarly: false}); validara todos los errores y me los va a enviar todos de una vez
