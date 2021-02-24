/// ===================================================
/// Server
/// ===================================================
const express = require("express");
const cors = require("cors");

// Environment
require("dotenv").config();

// Express server
const app = express();

// Body Parser
const bodyParser = require("body-parser");

// CORS
app.use(cors());

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
