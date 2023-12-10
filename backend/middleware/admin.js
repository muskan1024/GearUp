const jwt = require('jsonwebtoken');

function admin(req, res, next) {
    next();
//     const token = req.header('x-auth-token');

//     if(!token) {
//         //401 Unauthorized
//         return res.status(401).send('Token not provided');
//     }

//     try {
//         const decodedToken = jwt.verify(token, '1@3456Qw-');

//         if(decodedToken.isAdmin) {
//             req.user = decodedToken;
//             console.log(decodedToken);
//             next();
//         } else {
//             //403 Forbidden
//             return res.status(403).send('This is restricted to admins');
//         }
        
//     } catch(ex) {
//         res.status(400).send('Bad Request');
//     }
}

module.exports = admin;

// function admin(req, res, next) {
//     // No admin verification needed as there's no authentication
//     next();
//   }
  
// module.exports = {admin};  