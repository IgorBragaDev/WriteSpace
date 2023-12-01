const Methodology = require("../models/methodology")
const User = require("../models/User")
const Category = require("../models/Categories")
class MethodologyController {
    async createMethodology(req, res) {
        const { text } = req.body;
        const userId = res.locals.user.id;
        const categoryId = req.params.categoryId; 
    
        try {
          const user = await User.findByPk(userId);
          if (!user) {
            return res.status(400).json({ error: "User not found" });
          }
    
          const category = await Category.findOne({
            where: { id: categoryId, user_id: userId },
          });
          if (!category) {
            return res.status(400).json({ error: "Category not found or does not belong to the user" });
          }
          console.log("cheguei ate antes do create ")
          const newMethodology = await Methodology.create({
              text,
              category_id: categoryId,
            });
            console.log("cheguei ate depois do create ")
          
          res.status(201).json(newMethodology);
        } catch (error) {
          console.error("Erro ao criar metodologia:", error);
          res.status(500).send("Erro interno do servidor");
        }
      }
    
}


module.exports =  new MethodologyController()