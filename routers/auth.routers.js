const express = require("express");
const { sigIn } = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/sign-in", sigIn);

module.exports = {
    authRouter
};