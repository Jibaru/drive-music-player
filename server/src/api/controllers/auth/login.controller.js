const loginService = require("../../services/auth/login.service");
const { generateJwt } = require("../../../utils/jwt.util");

// POST: /api/login
// body: username, password
const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await loginService({ username, password });

    const jwt = generateJwt(user);

    return res.status(200).json({
      ok: true,
      user,
      jwt,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = loginController;
