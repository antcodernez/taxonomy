//Creando un middleware que captura cualquier error

function logErrors(error, req, res, next)
  {
    console.log("logerrors");
    console.error(error); //Util para en un solo lugar hacer traking de los errores, podemos implementar sistemas de errores como centry?? para monitorear mis errores
    //Seguira con la ejecucion aunque lo este monitoreando
    next(error); // Lo estamos ejecutando como un middleware de tipo error proque le estoy enviando un error
  }

//Middleware que detecta un error pero va a crear un formato para mi cliente
const errorHandler = (error, req, res, next) =>
  {
    res.status(500).json({
      message: error.message,
      stack: error.stack
    });
  } //La funcion next como parametro debo ponerla aunquen no la use, asi se detecta que es un middleware de tipo error

//Cannot set headers adter they are sent to the client error comun en node, se soluiciona en la funcion boomErrorHandler agregando un else
const boomErrorHandler = (error, req, res, next) =>
  {
    if(error.isBoom) //Cuando creo un error por la libreria boom le agrega una propiedad llamada isBoom
      {
        const {output} = error //Boom tiene toda la informacion de ese error en el output
        res.status(output.statusCode).json(output.payload); //output.payload tiene la informacion
        //output.statusCode es dinamico
      }
    else
      {
        next(error);
      }
  }

module.exports = { logErrors, errorHandler, boomErrorHandler};
