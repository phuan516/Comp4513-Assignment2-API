require("dotenv").config();
const express = require("express");
const app = express();
// create connection to database

require("./handlers/dataConnector.js").connect();
const Play = require("./models/Plays");
const User = require("./models/Users");
app.use(express.urlencoded({ extended: true }));
// use the route handlers
const userRouter = require("./handlers/userRouter.js");
const playRouter = require("./handlers/playRouter.js");
playRouter.handleAllPlays(app, Play);
playRouter.handleSinglePlay(app, Play);
userRouter.handleSingleUser(app, User);
const port = process.env.port;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});
