const pool = require('../../databasePool');
const { sortItems } = require('./helper');

class CommentTable {
  static getRecipeComment({ recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM comment WHERE "recipeId" = $1', [recipeId], (error, response) => {
        if (error) return reject(error);

        let comments = response.rows;
        sortItems(comments);

        resolve({ comments, commentsNumber: comments.length });
      });
    });
  }

  static addComment({ recipeId, userId, content, email }) {
    const addedDate = new Date();
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO comment(content, "recipeId", "userId", "addedDate", email) VALUES($1, $2, $3, $4, $5) RETURNING id',
        [content, recipeId, userId, addedDate, email],
        (error, response) => {
          if (error) return reject(error);

          resolve(response.rows);
        },
      );
    });
  }

  static editComment({ commentId, content, email }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE comment SET content=$1 WHERE id = $2 AND email=$3',
        [content, commentId, email],
        (error, response) => {
          if (error) return reject(error);

          resolve(response.rows);
        },
      );
    });
  }

  static deleteComment({ commentId }) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM comment WHERE id=$1', [commentId], (error, response) => {
        if (error) return reject(error);

        resolve(response.rows);
      });
    });
  }

  static deleteComments({ recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM comment WHERE "recipeId"=$1', [recipeId], (error, response) => {
        if (error) return reject(error);

        resolve(response.rows);
      });
    });
  }
}

module.exports = CommentTable;
