const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;
  if (!token)
    return res
      .status(401)
      .send("Access Denied, User is not authorized to use this route");
  try {
    const decode = jwt.verify(token.split(" ")[1], process.env.JWT_PRIVATE_KEY);
    req.user = decode;
    next();
  } catch (err) {
    res.status(400).send({ message: "Invalid Token" });
  }
};
module.exports = { authMiddleware };
