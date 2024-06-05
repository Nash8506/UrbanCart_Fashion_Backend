const jwt = require("jsonwebtoken");
const dotenv = require ("dotenv");

dotenv.config();

function authenticateUser(req, res, next) {
//   const token = req.cookies.token;
  const token=req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res
      .status(401)
      .json({
        message: "Not Authenticated : Please  login or register",
        success: false,
      });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);
    req.user = user;
    console.log("role:", req.user.role);
res.json({message: "authenticated", success: true, token})
    next();
  });
  };

module.exports = authenticateUser;