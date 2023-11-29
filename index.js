const express = require("express");
const morgan =require("morgan");
const app = express();
const port = process.env.PORT || 9222;

//definiendo morgan para inspeccionar el server
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(morgan("tiny"));

// app.use(express.static("public"));
// app.use("/styles", express.static("public/styles", { "extensions": ["css"] }));

app.get("/", (req, res) => {
    res.send("`<h1>Hola mundo</h1>`")
}); 

app.listen(port, () => console.log(`Ya estoy funcionando master en http://localhost:${port}`));