// const jwt = require ("jsonwebtoken");
// const dotenv = require ("dotenv");

// dotenv.config();

// function authenticateSeller(req, res, next) {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: 'Not Authenticated : Please  login or register' });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//     console.log(err);
//     if (err) return res.sendStatus(403);

//     req.user = user;
//     console.log(req.user.role);
//     if (req.user.role !== "SELLER" && req.user.role !== "ADMIN") {
//       return res.send("Not Authenticated : You are not Seller or Admin");
//     }
//     next();
//   });
// }

// module.exports = authenticateSeller;