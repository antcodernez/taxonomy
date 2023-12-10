const express = require("express");
const morgan =require("morgan");
const {logErrors, errorHandler, boomErrorHandler } = require("./middlewares/errorHandler");
const {routerApi} = require("./routes/index.routes");
const port = process.env.PORT || 9222;

const app = express();
//definiendo morgan para inspeccionar el server

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(morgan("tiny"));

// app.use(express.static("public"));
// app.use("/styles", express.static("public/styles", { "extensions": ["css"] }));
app.use('/public', express.static('public', { 'Content-Type': 'text/css' }));

app.get("/", (req, res) => {
    res.send("`<h1>Hola mundo</h1>`")
}); 
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static('public'));

routerApi(app);

//Implementado los middlewares de tipo error; este tipo de middleware se hacen despues del routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// app.use(queryErrorHandler);

app.listen(port, () => console.log(`Ya estoy funcionando master en http://localhost:${port}`));