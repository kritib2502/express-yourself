"use strict";

const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.envPORT || 3003;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
const indexRouter = require("./routers/indexRouter");
const profilesRouter = require("./routers/profilesRouter");

// index routes
app.use(indexRouter);
app.use(profilesRouter);
// Morgan Logging Middleware
const logger = require("morgan");
// Using logger as middleware, with 3 different output templates
app.use(logger("dev")); // method, path, status, time

// Express.static middleware to make the public folder globally accessible
app.use(express.static("public"));




//catch any unmatched routes
app.all("/*", (req, res) => {
    res.status(404).send("File Not Found");
  });
  

 

