const { Router } = require('express');
const { hash } = require('../user/helper');
const UserTable = require('../user/table');
const Session = require('../user/session');
const { setSession } = require('./helper');

const router = Router();

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body;

  const emailHash = hash(email);
  const passwordHash = hash(password);

  UserTable.getUser({ emailHash })
    .then(({ user }) => {
      if (!user) {
        return UserTable.storeUser({ emailHash, passwordHash }).catch((error) => next(error));
      } else {
        const error = new Error('This email has already been taken');

        error.statusCode = 409;

        throw error;
      }
    })
    .then((id) => {
      const userId = id.id;
      return setSession({ email, res, userId });
    })
    .then(({ message, userId }) => res.json({ message, userId }))
    .catch((error) => next(error));
});

router.post('/signin', (req, res, next) => {
  const { email, password } = req.body;

  const emailHash = hash(email);
  const passwordHash = hash(password);

  UserTable.getUser({ emailHash })
    .then(({ user }) => {
      if (user && user.passwordHash === passwordHash) {
        const userId = user.id;
        const { sessionId } = user;

        return setSession({ email, res, sessionId, userId });
      } else {
        const error = new Error('Incorrect email or password');

        error.statusCode = 409;

        throw error;
      }
    })
    .then(({ message, userId }) => res.json({ message, userId }))
    .catch((error) => next(error));
});

router.get('/signout', (req, res, next) => {
  const { email } = Session.parse(req.cookies.sessionString);

  UserTable.updateUserId({
    sessionId: null,
    emailHash: hash(email),
  })
    .then(() => {
      res.clearCookie('sessionString');

      res.json({ message: 'Successful logout' });
    })
    .catch((error) => next(error));
});

router.get('/authenticated', (req, res, next) => {
  const { sessionString } = req.cookies;

  if (!sessionString || !Session.verify(sessionString)) {
    const error = new Error('Invalid session');

    error.statusCode = 400;

    return next(error);
  } else {
    const { email, id } = Session.parse(sessionString);

    UserTable.getUser({ emailHash: hash(email) })
      .then(({ user }) => {
        const authenticated = user.sessionId === id;
        const userId = user.id;

        if (authenticated) {
          res.json({ authenticated, email, userId });
        } else {
          res.json({ authenticated });
        }
      })
      .catch((error) => next(error));
  }
});

module.exports = router;
