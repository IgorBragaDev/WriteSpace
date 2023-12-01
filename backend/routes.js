const { Router } = require("express");

/* CONTROLLERS */

const UserController = require("./src/App/controllers/ControllerUser");

const CategoriesController = require("./src/App/controllers/ControllerCategories")
const routes = Router();

/* SESSIONS */

routes.post("/sessions", UserController.register);
routes.post("/sessions/login", UserController.login)


/*CATEGORIES*/

routes.post("/categories/:user_id", CategoriesController.createCategory)

module.exports = routes