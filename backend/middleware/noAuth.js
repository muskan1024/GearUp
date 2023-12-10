const jwt = require('jsonwebtoken');

function noAuth(req, res, next) {
    // No authentication logic needed
    next();
  }
  
module.exports = {noAuth};