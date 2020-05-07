const Session = require('./session');
const UserTable = require('./table');
const { hash } = require('./helper');

const authenticate = (sessionString, userId) => {
  return new Promise((resolve, reject) => {
    if (!sessionString || !Session.verify(sessionString)) {
      resolve(false);
    } else {
      const { email, id } = Session.parse(sessionString);

      UserTable.getUser({ emailHash: hash(email) })
        .then(({ user }) => {
          let authenticated = user.sessionId === id && user.id === parseInt(userId);

          if (authenticated) {
            resolve({ authenticated, email });
          } else {
            reject(authenticated);
          }
        })
        .catch((error) => {
          return error;
        });
    }
  });
};

module.exports = authenticate;
