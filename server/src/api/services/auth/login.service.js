const bcrypt = require("bcrypt");
const { User } = require("../../../db/models/index");

const loginService = async ({ username, password }) => {
  const userFinded = await User.findOne({
    where: {
      username,
    },
  });

  if (!userFinded) {
    throw new Error("Authentication failed");
  }

  if (!bcrypt.compareSync(password, userFinded.password)) {
    throw new Error("Password invalid");
  }

  const userWithoutPassword = await User.findByPk(userFinded.id, {
    attributes: {
      exclude: ["password"],
    },
  });

  return userWithoutPassword;
};

module.exports = loginService;
