const Categories = require("../models/Categories");
const User = require("../models/User");
class ControllerCategories {
  async createCategory(req, res) {
    const { title } = req.body;
    const user_id = res.locals.user.id;
    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ error: "User not Found" });
      }
      const newCategory = await Categories.create({
        title,
        user_id: user_id,
      });

      res.status(201).json(newCategory);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

module.exports = new ControllerCategories();
