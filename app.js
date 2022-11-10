"use strict";

const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.envPORT || 3003;

// Morgan Logging Middleware
const logger = require("morgan");
// Using logger as middleware, with 3 different output templates
app.use(logger("dev")); // method, path, status, time

