const jwt = require('jsonwebtoken');
 
const secrets = require('./config/secrets.js.js');

module.exports = (req, res, next, ) => {
  const token = req.headers.authorization;
  if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
          if (err) {
          
              res.status(401).json(err);
          } else {
              req.user = {
                  username: decodedToken.username
              };
              next();
          }
      });
  } else {
    console.log(token);
      res.status(401).json({ you: 'shall not pass!' })
  }
};