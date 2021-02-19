const { User } = require("../../../db/models/index");

const getOneUserService = async ({ userId }) => {
  const userFinded = await User.findByPk(userId);

  if (!userFinded) {
    throw new Error("User not found");
  }

  return userFinded;
};

module.exports = getOneUserService;
