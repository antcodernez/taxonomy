const express = require("express");
const morgan =require("morgan");
const csurf = require("csurf"); 
const cookieParser = require("cookie-parser"); 

const {logErrors, errorHandler, boomErrorHandler } = require("./middlewares/errorHandler");
const {queryErrorHandler} = require("./middlewares/queryErrorhandler");
const {routerApi} = require("./routes/index.routes");

const port = process.env.PORT || 9222;
const app = express();
//definiendo morgan para inspeccionar el server

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//Habilitando lectura de datos de formulario
// app.use(cookieParser());

// //habilidanto csurf
// app.use(csurf({cookie: true}));

//Habilitanto morgan
app.use(morgan("tiny"));

// configurando los archivos MIME para el css

app.use('/public', express.static('public', { 'Content-Type': '/public/css/app.css' }));

app.get("/", (req, res) => {
    res.render('layout/home',{
        cssFile: '/public/css/app.css'
    });
}); 

app.post("/registerUser", (req, res) => {
    // Tu código de manejo de la solicitud POST aquí
    const { name, email, password} = req.body;
    // Validación y otras operaciones...

    // Ejemplo de respuesta
    res.json({ message: "Registro exitoso", user: { name, email, password } });
});


// Habilitando pug
app.set("view engine", "pug");
app.set("views", "./views");

//Carpeta publica
app.use(express.static('public'));

//Roting
routerApi(app);


//Implementado los middlewares de tipo error; este tipo de middleware se hacen despues del routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(queryErrorHandler);

app.listen(port, () => console.log(`Ya estoy funcionando master en http://localhost:${port}`));