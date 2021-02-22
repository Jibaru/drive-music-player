const { SignupInformation } = require("../../../db/models/index");

const updateSignupInformationService = async (email, { pin }) => {
  const updateFields = { pin };
  const signupInformationFinded = await SignupInformation.findByPk(email);

  if (!signupInformationFinded) {
    throw new Error("SignupInformation not found");
  }

  Object.keys(updateFields).forEach((key) => {
    if (updateFields[key] !== null && updateFields[key] !== undefined) {
      signupInformationFinded[key] = updateFields[key];
    }
  });

  await signupInformationFinded.save();
  return "SignupInformation updated correctly";
};

module.exports = updateSignupInformationService;
