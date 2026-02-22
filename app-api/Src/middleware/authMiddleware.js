const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Token not provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        status: false,
        message: "Invalid or expired token",
      });
    }

    req.user = decoded;
    req.user.userId = decoded.id;
    next();

  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Authentication failed",
    });
  }
};

module.exports = authMiddleware;