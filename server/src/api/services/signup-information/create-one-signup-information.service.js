const { SignupInformation } = require("../../../db/models/index");

const createOneSignupInformationService = async ({ email, pin }) => {
  const signupInformation = await SignupInformation.create({
    email,
    pin,
  });

  return signupInformation;
};

module.exports = createOneSignupInformationService;
