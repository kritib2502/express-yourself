const express = require("express");
const profilesRouter = express.Router();


profilesRouter.get("/profiles", (req,res) => res.send("Profiles List"));

profilesRouter.get("/:profileId", (req, res) => {
  res.send(`Individual Prodile ${req.params.profileId}`);
});

module.exports = profilesRouter;