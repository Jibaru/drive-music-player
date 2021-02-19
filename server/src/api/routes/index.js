const app = require("express")();

app.use(require("./auth.routes"));
app.use(require("./user.routes"));
app.use(require("./playlist.routes"));

module.exports = app;
