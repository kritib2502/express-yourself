
const express = require("express");
const indexRouter = express.Router();


indexRouter.get("/", (req, res) => res.send("Hello World!"));
indexRouter.get("/about", (req, res) => res.send("About Us"));
indexRouter.get("/contact", (req, res) => res.send("Contact Us"));


indexRouter.post("/contact", (req, res) => res.send("Thank you contacting"));

module.exports = indexRouter;