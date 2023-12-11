const express = require("express");
const userRouter = require("./userRouting"); 

function routerApi(app) {
    const router = express.Router();
    app.use("/", router);
    router.use("/auth/login", userRouter);
    
}

module.exports = { routerApi}