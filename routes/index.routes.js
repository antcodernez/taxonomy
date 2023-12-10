const express = require("express");
const userRouter = require("./userRouting"); 

function routerApi(app) {
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/login", userRouter);
    
}

module.exports = { routerApi}