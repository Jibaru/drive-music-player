/// ===================================================
/// Server
/// ===================================================
const express = require("express");

// Enviroment
require("./env/environment");

// Express server
const app = express();

// Body Parser
const bodyParser = require("body-parser");

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API
app.use(require("./api/index"));

// SPA
app.use(express.static(__dirname + "../app/dist"));

// Run server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
