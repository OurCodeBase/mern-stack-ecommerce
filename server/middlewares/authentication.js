const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
  try {
  const { token } = req.cookies;
  jwt.verify(token, process.env.JWT_KEY, (error) => {
    if (error) throw new Error();
    return next();
  })
  } catch (e) {
    res.statusCode = 500;
    return res.json({ status: "error", message: "Login please." });
  }
}

module.exports = authentication;
