const { Router } = require("express");

const authMiddleware = require("./src/App/middlewares/auth")
/* CONTROLLERS */

const UserController = require("./src/App/controllers/ControllerUser");

const CategoriesController = require("./src/App/controllers/ControllerCategories")

const routes = Router();

/* SESSIONS */

routes.post("/sessions", UserController.register);
routes.post("/sessions/login", UserController.login)


/*CATEGORIES*/

routes.post("/categories",authMiddleware ,CategoriesController.createCategory)
routes.post("/categories/:categoryId",authMiddleware ,CategoriesController.updateCategory)



module.exports = routes