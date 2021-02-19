const { User } = require("../../../db/models/index");

const updateUserRootDriveKeyService = async ({ userId, newRootDriveKey }) => {
  const userFinded = await User.findByPk(userId);

  if (!userFinded) {
    throw new Error("User not found");
  }

  try {
    userFinded.rootDriveKey = newRootDriveKey;
    await userFinded.save();
    return userFinded;
  } catch (error) {
    throw new Error("RootDriveKey is currently in use");
  }
};

module.exports = updateUserRootDriveKeyService;
