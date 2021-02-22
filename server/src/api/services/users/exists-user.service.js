const { User } = require("../../../db/models/index");

const existsUserService = async ({ userId, email, username }) => {
  const usersFinded = await User.findAll({
    where: {
      ...(userId && {
        id: userId,
      }),
      ...(email && {
        email,
      }),
      ...(username && {
        username,
      }),
    },
  });

  return usersFinded.length != 0;
};

module.exports = existsUserService;
