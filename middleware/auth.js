const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // 1) Get token from header
  const token = req.header("x-auth-token");

  // 2) Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // 3) Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // 4) Set incoming payload 'user' to req.user
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token not valid" });
  }
};
