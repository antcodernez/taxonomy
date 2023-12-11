const express = require("express");
const userRouter = require("./user.routes"); 

function routerApi(app) {
    const router = express.Router();
    app.use("/", router);
    router.use("/auth/login", userRouter);
    
}

module.exports = { routerApi}