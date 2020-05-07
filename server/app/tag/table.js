const pool = require('../../databasePool');

class TagTable {
  static getTagId({ tagType, tagValue }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id FROM tag WHERE "tagType" = $1 AND "tagValue" = $2',
        [tagType, tagValue],
        (error, response) => {
          if (error) return reject(error);

          const tagId = response.rows[0].id;

          resolve({ tagId });
        },
      );
    });
  }

  static getAllTags() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from tag', (error, response) => {
        if (error) return reject(error);

        resolve(response.rows);
      });
    });
  }
}

module.exports = TagTable;
