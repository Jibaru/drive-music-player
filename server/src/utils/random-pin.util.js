const crypto = require("crypto");

const generateRandomPin = (length) => {
  const str = crypto.randomBytes(length).toString("hex");

  if (str.length > length) {
    return str.substring(0, length).toUpperCase();
  }

  return generateRandomPin(length);
};

const generateRandom6DigitsPin = () => generateRandomPin(6);

module.exports = {
  generateRandomPin,
  generateRandom6DigitsPin,
};
