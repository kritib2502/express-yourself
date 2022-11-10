const express = require("express");
const apiRouter = express.Router();


apiRouter.get("/api/profiles", (req,res) => res.send("api profiles "));


module.exports = apiRouter;