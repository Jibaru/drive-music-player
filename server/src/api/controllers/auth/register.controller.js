const registerService = require("../../services/auth/register.service");

// POST: /api/register
// body: username, password
const registerController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await registerService({ username, password });

    return res.status(200).json({
      ok: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = registerController;
