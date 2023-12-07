const User = require("../models/User");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class ControllerUsers {
  async register(req, res) {
    const { name, email, password } = req.body;
    try {
      
      const existingUser = await User.findOne({
        where: {
          email: {
            [Op.eq]: email,
          },
        },
      });

      if (existingUser) {
        return res.status(400).json({ error: "E-mail já cadastrado" });
      }
      const newUser = await User.create({
        name,
        email,
        password,
      });

      newUser.password = undefined;

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
  async login(req, res) {
    const { email, password } = req.body;

    try {
     
      const user = await User.findOne({
        where: {
          email: {
            [Op.eq]: email,
          },
        },
      });

      if (!user) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h", 
      });

      res.status(200).json({ token });
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

module.exports = new ControllerUsers();
