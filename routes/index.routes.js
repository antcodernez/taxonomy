const express = require("express");
const userRouter = require("./user.routes"); 
const homeRouter = require("./home.router");

function routerApi(app) {
    const router = express.Router();
    app.use("/", router);
    router.use("/auth/", userRouter);
    // router.use("/", userRouter);
    router.use("/home/", homeRouter);

}

module.exports = { routerApi}