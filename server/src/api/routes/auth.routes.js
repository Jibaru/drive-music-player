const app = require("express")();

const ROUTES = {
  login: "/api/login",
  register: "/api/register",
  preRegister: "/api/pre-register",
};

app.post(ROUTES.login, require("../controllers/auth/login.controller"));

app.post(ROUTES.register, require("../controllers/auth/register.controller"));

app.post(
  ROUTES.preRegister,
  require("../controllers/auth/pre-register.controller")
);

module.exports = app;
