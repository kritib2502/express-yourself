const express = require("express");
const profilesRouter = express.Router();


profilesRouter.get("/profiles", (req,res) => res.send("Profiles List"));

profilesRouter.get("/:profileID", (req,res) => {
    res.send(`Profile details ${req.params.profileID}`);
} );

module.exports = profilesRouter;