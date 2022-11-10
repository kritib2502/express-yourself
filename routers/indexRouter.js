
const express = require("express");
const indexRouter = express.Router();

 //index
 indexRouter.get("/", (req, res) => res.send("Welcome Home!"));
 indexRouter.get("/about", (req, res) => res.send("Out and about in a boat"));
//indexRouter.get("/contact", (req, res) => res.send("Contact Us"));

//indexRouter.post("/contact", (req, res) => res.send("Thank you contacting"));

module.exports = indexRouter;