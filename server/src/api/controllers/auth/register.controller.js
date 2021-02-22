const getOneSignupInformationService = require("../../services/signup-information/get-one-signup-information.service");
const registerService = require("../../services/auth/register.service");

// POST: /api/register
// body: username, password, email, pin
const registerController = async (req, res) => {
  const { username, email, password, pin } = req.body;

  try {
    const signupInformation = await getOneSignupInformationService(email);

    if (signupInformation.pin !== pin) {
      throw new Error("Verification code is invalid");
    }

    const user = await registerService({ username, email, password });

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
