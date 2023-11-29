const express = require("express");
const morgan =require("morgan");
const app = express();
const port = process.env.PORT || 9222;

//definiendo morgan para inspeccionar el server
app.set(morgan("tiny"))

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/styles", express.static("public/styles", { "extensions": ["css"] }));

app.get("/", (req, res) => {
    res.render("index/index")
}); 

app.listen(port, () => console.log(`Ya estoy funcionando master en http://localhost:${port}`));