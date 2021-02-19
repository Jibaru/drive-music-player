const app = require("express")();

app.use(require("./routes/index"));

module.exports = app;
