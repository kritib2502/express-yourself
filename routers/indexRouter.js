
const express = require("express");
const indexRouter = express.Router();

<<<<<<< HEAD
indexRouter.get("/", (req, res) => res.send("Hello World!"));
indexRouter.get("/about", (req, res) => res.send("About Us"));
indexRouter.get("/contact", (req, res) => res.send("Contact Us"));
=======
 //index
 indexRouter.get("/", (req, res) => res.send("Welcome Home!"));
 indexRouter.get("/about", (req, res) => res.send("Out and about in a boat"));
 indexRouter.get("/contact", (req, res) => res.send("Contact Us"));
>>>>>>> sara

indexRouter.post("/contact", (req, res) => res.send("Thank you contacting"));

module.exports = indexRouter;