// const jwt = require('jsonwebtoken');
// const { AUTH_TOKEN } = require('../constants');

// function auth(req, res, next) {
//     const token = req.headers['authorization'] || req.body.token;

//     if(!token) {
//         //401 Unauthorized
//         return res.status(401).send('Please Login first to access this endpoint!');
//     }

//     try {
//         const decodedToken = jwt.verify(token, '1@3456Qw-');
//         // , '1@3456Qw-'
//         req.user = decodedToken;
//         console.log(decodedToken);
//         next();
//     } catch(ex) {
//         res.status(401).send('Unauthorized User');
//     }
// }

// module.exports = auth;

const jwt = require('jsonwebtoken');

const verifyAdmin = async (req, res, next) => {
  const token = req.headers['authorization'] || req.body.token;
  if (!token) {
    return res.status(401).send('Unauthorized access');
  }

  try {
    const decodedToken = jwt.verify(token, '1@3456Qw-');
    if (!decodedToken.isAdmin) {
      return res.status(403).send('Forbidden access: Only admins can perform this action');
    }
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { verifyAdmin };