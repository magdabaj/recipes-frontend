const { hash } = require('../user/helper');
const Session = require('../user/session');
const UserTable = require('../user/table');

const setSession = ({ email, res, sessionId, userId }) => {
  return new Promise((resolve, reject) => {
    let session, sessionString;

    if (sessionId) {
      sessionString = Session.sessionString({ email, id: sessionId });

      setSessionCookie({ sessionString, res });

      resolve({ message: 'session restored', userId });
    } else {
      const session = new Session({ email });
      const sessionString = session.toString();

      UserTable.updateUserId({
        sessionId: session.id,
        emailHash: hash(email),
      })
        .then(() => {
          setSessionCookie({ sessionString, res });

          resolve({ message: 'session created', userId });
        })
        .catch((error) => reject(error));
    }
  });
};

const setSessionCookie = ({ sessionString, res }) => {
  res.cookie('sessionString', sessionString, {
    expire: Date.now() + 3600000,
    httpOnly: true,
    secure: true // only with https
  });
};

const pageItems = (items, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let previousPage, nextPage, totalPages;

  if (startIndex > 0) {
    previousPage = {
      page: page - 1,
      limit: limit,
    };
  }

  if (endIndex < items.length) {
    nextPage = {
      page: page + 1,
      limit: limit,
    };
  }

  totalPages = Math.ceil(items.length / limit);

  return {
    items: items.slice(startIndex, endIndex),
    nextPage,
    previousPage,
    totalPages,
  };
};

module.exports = { setSession, pageItems };
