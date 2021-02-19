const app = require("express")();

const ROUTES = {
  login: "/api/login",
  register: "/api/register",
};

app.post(ROUTES.login, require("../controllers/auth/login.controller"));

app.post(ROUTES.register, require("../controllers/auth/register.controller"));

module.exports = app;
