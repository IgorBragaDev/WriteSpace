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

  async updateCategory(req, res) {
    const { categoryId } = req.params;
    const { title } = req.body;

    try {
      const category = await Categories.findByPk(categoryId);

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      if (category.user_id !== res.locals.user.id) {
        return res.status(403).json({ error: "Permission denied" });
      }

      await category.update({ title });

      res.status(200).json(category);
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getAllUserCategories(req, res) {
    try {
      const userId = res.locals.user.id;
      const userCategories = await Categories.findAll({
        where: { user_id: userId },
      });

      res.status(200).json(userCategories);
    } catch (error) {
      console.error("Erro ao obter categorias do usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
  
}

module.exports = new ControllerCategories();
