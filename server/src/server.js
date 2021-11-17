/// ===================================================
/// Server
/// ===================================================
const express = require("express");
const cors = require("cors");
const path = require("path");
const history = require("connect-history-api-fallback");

// Environment
require("dotenv").config();

// Express server
const app = express();
const frontRoot = path.join(__dirname, "public/dist");

// Body Parser
const bodyParser = require("body-parser");

// CORS
app.use(cors());

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API
app.use(require("./api/index"));

app.use(express.static(frontRoot));
// SPA
app.use(
  history({
    verbose: true,
  })
);
app.use(express.static(frontRoot));

app.get(/^((?!(api)).)*$/, (req, res) => {
  res.sendFile(path.join(frontRoot, "index.html"));
});

// Run server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
