const express = require("express");
const app = express();
const port = process.env.PORT || 9222;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("./index/index")
}); 

app.listen(port, () => console.log(`Ya estoy funcionando master en http://localhost:${port}`));