
const express = require("express");
const indexRouter = express.Router();


indexRouter.get("/", (req, res) => res.render('index'));
indexRouter.get("/about", (req, res) => res.render('about'));
indexRouter.get("/contact", (req, res) => res.render('contact'));


indexRouter.post("/contact", (req, res) => res.render('contact'));

module.exports = indexRouter;