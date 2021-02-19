const jwt = require("jsonwebtoken");

const checkTokenMiddleware = (req, res, next) => {
  const token = req.get("token") || req.query.token;

  jwt.verify(token, process.env.TOKEN_SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        error: "Invalid token",
      });
    }

    req.user = decoded.user;

    next();
  });
};

module.exports = checkTokenMiddleware;
