const checkAdminRoleMiddleware = (req, res, next) => {
  let user = req.user;

  if (user.role === "ADMIN") {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      error: "The user is not authorized to execute this operation",
    });
  }
};

module.exports = checkAdminRoleMiddleware;
