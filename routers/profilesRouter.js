const express = require("express");
const profilesRouter = express.Router();


profilesRouter.get("/profiles", (req,res) => res.send("Profiles List"));


module.exports = profilesRouter;