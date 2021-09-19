const express = require("express");
const { authRouter } = require("./auth.routers");
const { cinemaRouter } = require("./ciname.router");
const { userRouter } = require("./user.router");
const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/cinemas", cinemaRouter)

module.exports = {
    rootRouter,
}