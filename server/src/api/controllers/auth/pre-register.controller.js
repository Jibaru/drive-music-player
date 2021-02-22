const { generateRandom6DigitsPin } = require("../../../utils/random-pin.util");

const sendMailService = require("../../services/mail/send-mail.service");
const existsUserService = require("../../services/users/exists-user.service");
const existsSignupInformationService = require("../../services/signup-information/exists-signup-information.service");
const createOneSignupInformationService = require("../../services/signup-information/create-one-signup-information.service");
const updateSignupInformationService = require("../../services/signup-information/update-signup-information.service");

// POST: /api/pre-register
// body: username, email
const preRegisterController = async (req, res) => {
  const { username, email } = req.body;

  try {
    // Check if email or username already registered
    if (
      (await existsUserService({ email })) ||
      (await existsUserService({ username }))
    ) {
      throw new Error("Username or email already exists");
    }

    const pin = generateRandom6DigitsPin();

    if (await existsSignupInformationService({ email })) {
      await updateSignupInformationService(email, { pin });
    } else {
      await createOneSignupInformationService({
        email,
        pin,
      });
    }

    await sendMailService({
      to: email,
      subject: "VERIFICATION CODE",
      content: `Your verification code is: ${pin}`,
    });

    return res.status(200).json({
      ok: true,
      message: "Verification code sended",
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = preRegisterController;
