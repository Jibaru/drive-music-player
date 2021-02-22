const { SignupInformation } = require("../../../db/models/index");

const existsSignupInformationService = async ({ email, pin }) => {
  const signupInformarionsFinded = await SignupInformation.findAll({
    where: {
      ...(email && {
        email,
      }),
      ...(pin && {
        pin,
      }),
    },
  });

  return signupInformarionsFinded.length !== 0;
};

module.exports = existsSignupInformationService;
