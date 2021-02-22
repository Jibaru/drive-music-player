const bcrypt = require("bcrypt");
const { User } = require("../../../db/models/index");

const registerService = async ({ username, email, password }) => {
  console.log("Slta rounds:", process.env.BCRYPT_SALT_ROUNDS);
  try {
    const userCreated = await User.create({
      username: username,
      email: email,
      password: bcrypt.hashSync(
        password,
        parseInt(process.env.BCRYPT_SALT_ROUNDS)
      ),
    });

    const userWithoutPassword = await User.findByPk(userCreated.id, {
      attributes: {
        exclude: ["password"],
      },
    });

    return userWithoutPassword;
  } catch (error) {
    console.log(error);
    throw new Error("Username exists");
  }
};

module.exports = registerService;
