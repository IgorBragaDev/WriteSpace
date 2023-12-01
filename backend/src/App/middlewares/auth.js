const jwt = require("jsonwebtoken");
const User  = require("../models/User");

module.exports = async (req, res, next) => {
  const authHeader  = req.headers.authorization;

  if (!authHeader ) {
    return res.status(401).json({ error: "Token não fornecido" });
  }
  const [, token] = authHeader.split(" ");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    res.locals.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error("Erro na verificação do token:", error);
    return res.status(401).json({ error: "Token inválido" });
  }
};
