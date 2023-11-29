const { Router } = require("express");

/* CONTROLLERS */

const UserController = require("./src/App/controllers/ControllerUser");

const routes = Router();

/* SESSIONS */

routes.post("/sessions", UserController.register);


module.exports = routes