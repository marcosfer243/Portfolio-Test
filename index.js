const express = require("express");

const projectsRoute = require("./src/routes/projects-routes.js");
const debug = require("debug")("app:server");
const { Config } = require("./src/Config/index");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors());

app.use("/", projectsRoute);

app.listen(Config.port || 9999, () => {
  debug(`Server listening at port ${Config.port}`);
});

module.exports = app;
