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
      // Verifica se a categoria existe
      const category = await Categories.findByPk(categoryId);

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      // Verifica se o usuário tem permissão para atualizar a categoria
      if (category.user_id !== res.locals.user.id) {
        return res.status(403).json({ error: "Permission denied" });
      }

      // Atualiza o título da categoria
      await category.update({ title });

      res.status(200).json(category);
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

module.exports = new ControllerCategories();
