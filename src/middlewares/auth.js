const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // get access token
  const access_token = req.header('x-auth-token');

  if(!access_token) {
    res.status(403).json({
      msg: "Access Denied",
      isSucess: false,
    });
    return;
  }

  try {
    const decoded = jwt.verify(access_token, process.env.TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch(e) {
    res.status(401).json({
      msg: "Invalid token",
      isSucess: false,
    });
  }
}