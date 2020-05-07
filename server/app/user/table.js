const pool = require('../../databasePool');

class UserTable {
  static storeUser({ emailHash, passwordHash }) {
    const addedDate = new Date();
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO "user"("emailHash", "passwordHash", "addedDate") VALUES ($1,$2, $3) RETURNING id',
        [emailHash, passwordHash, addedDate],
        (error, response) => {
          if (error) return reject(error);

          resolve(response.rows[0]);
        },
      );
    });
  }

  static getUser({ emailHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id,"passwordHash","sessionId" FROM "user" WHERE "emailHash" = $1',
        [emailHash],
        (error, response) => {
          if (error) return reject(error);

          resolve({ user: response.rows[0] });
        },
      );
    });
  }

  static updateUserId({ sessionId, emailHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE "user" SET "sessionId" = $1 WHERE "emailHash" = $2',
        [sessionId, emailHash],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        },
      );
    });
  }
}

module.exports = UserTable;
