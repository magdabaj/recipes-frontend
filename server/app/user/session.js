const uuid = require('uuid');
const { hash } = require('./helper');

const SEPARATOR = '|';

class Session {
  constructor({ email }) {
    this.email = email;
    this.id = uuid();
  }

  toString() {
    const { email, id } = this;

    return Session.sessionString({ email, id });
  }

  static userData({ email, id }) {
    return `${email}${SEPARATOR}${id}`;
  }

  static sessionString({ email, id }) {
    const userData = Session.userData({ email, id });

    return `${userData}${SEPARATOR}${hash(userData)}`;
  }

  static parse(sessionString) {
    const sessionData = sessionString.split(SEPARATOR);

    return {
      email: sessionData[0],
      id: sessionData[1],
      sessionHash: sessionData[2],
    };
  }

  static verify(sessionString) {
    const { email, id, sessionHash } = Session.parse(sessionString);

    const userData = Session.userData({ email, id });

    return hash(userData) === sessionHash;
  }
}

module.exports = Session;
