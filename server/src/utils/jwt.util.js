const jwt = require("jsonwebtoken");

const generateJwt = (user) => {
  return jwt.sign(
    {
      user: user,
    },
    process.env.TOKEN_SEED,
    { expiresIn: process.env.TOKEN_EXPIRES }
  );
};

module.exports = {
  generateJwt,
};
