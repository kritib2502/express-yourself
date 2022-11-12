const express = require("express");
const profilesRouter = express.Router();
const path = require("path");
const fs = require("fs");

// profilesRouter.get("/:profileId", (req, res) => {
//   res.render(`Individual Prodile ${req.params.profileId}`);
// });


const dataPath = path.join(__dirname, "../data/");

profilesRouter.get("/profiles", (req, res) => {
  fs.readFile(dataPath + "profiles.json")
    .then((contents) => {
      console.log(contents);
      // need to parse the raw buffer as json if we want to work with it
      const profilesJson = JSON.parse(contents);
      console.log(profilesJson);
      //   prepare and send an OK response
      res.render("profiles", {
        title: "Express Yourself - Profiles",
        profiles: profilesJson,
      });
    })
    .catch((err) => {
      console.log(err);
      res.writeHead(500);
      res.end("Error");
    });
});
module.exports = profilesRouter;
