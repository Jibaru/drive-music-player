const { SignupInformation } = require("../../../db/models/index");

const getOneSignupInformationService = async (email) => {
  const signupInformationFinded = await SignupInformation.findByPk(email);

  if (!signupInformationFinded) {
    throw new Error("SignupInformation not found");
  }

  return signupInformationFinded;
};

module.exports = getOneSignupInformationService;
