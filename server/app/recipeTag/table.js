const pool = require('../../databasePool');

class RecipeTagTable {
  static storeRecipeTag({ tagId, recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO recipetags("tagId", "recipeId") VALUES($1, $2)',
        [tagId, recipeId],
        (error, response) => {
          if (error) return reject(error);

          resolve(response);
        },
      );
    });
  }

  static editRecipeTag({ tagId, recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE recipetags SET "tagId" = $1 WHERE "recipeId" = $2',
        [tagId, recipeId],
        (error, response) => {
          if (error) return reject(error);

          resolve(response);
        },
      );
    });
  }

  static deleteRecipeTags({ recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM recipetags WHERE "recipeId" = $1', [recipeId], (error, response) => {
        if (error) return reject(error);

        resolve(response.rows);
      });
    });
  }
}

module.exports = RecipeTagTable;
