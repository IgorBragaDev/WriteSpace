const User = require("../models/User");

class ControllerUsers {
  async register(req, res) {
    console.log(req.body)
    const { name, email, password } = req.body;
    try {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

module.exports = new ControllerUsers();
