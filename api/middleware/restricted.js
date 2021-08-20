/*IMPLEMENT
  1- On valid token in the Authorization header, call next.

  2- On missing token in the Authorization header,
    the response body should include a string exactly as follows: "token required".

  3- On invalid or expired token in the Authorization header,
    the response body should include a string exactly as follows: "token invalid".
*/
const { findBy } = require('../users/users-model');

const restricted = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return next({ status: 401, message: 'token required' })
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({ status: 401, message: 'Token invalid' })
    } else {
      req.decodedToken = decodedToken
      next()
    }
  })
}

const checkUsernameExists = async (req, res, next) => {
/*
If the username in req.body does NOT exist in the database
status 401
{
"message": "Invalid credentials"
}
*/
try {
  const [user] = await findBy({ username: req.body.username })
  if (!user) {
    next({ status: 401, message: 'Invalid credentials' })
  } else {
    req.user = user
    next()
  }
} catch (err) {
  next(err)
}
}

module.exports = {
  restricted,
  checkUsernameExists
};

// module.exports = (req, res, next) => { next() }