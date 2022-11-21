require("dotenv").config({ path: "../.env" });
const express = require("express");
const connectToDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", userRoutes);
module.exports = app;
