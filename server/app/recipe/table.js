const pool = require('../../databasePool');
const RecipeTagTable = require('../recipeTag/table');
const { sortRecipes } = require('./helpers');
const { pageItems } = require('../api/helper');

class RecipeTable {
  static getRecipes({ page, limit }) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM recipe', (error, response) => {
        if (error) return reject(error);
        let recipes = response.rows;
        sortRecipes(recipes);
        let result = pageItems(recipes, page, limit);

        resolve(result);
      });
    });
  }

  static getRecipe({ recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM recipe WHERE id = $1', [recipeId], (error, response) => {
        if (error) return reject(error);

        resolve(response.rows);
      });
    });
  }

  static getUserRecipes({ user, page, limit }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT recipetags."tagId", recipe.id, recipe.title, recipe.url, recipe.image, recipe.website, recipe."userId", recipe."addedDate" FROM recipetags ' +
          'LEFT JOIN recipe on recipe.id = recipetags."recipeId" WHERE "userId"=$1',
        [user.id],
        (error, response) => {
          if (error) return reject(error);
          let recipes = response.rows;
          sortRecipes(recipes);

          let result = pageItems(recipes, page, limit);

          resolve(result);
        },
      );
    });
  }

  static storeRecipe({ title, url, image, website, userId, tagId }) {
    return new Promise((resolve, reject) => {
      let addedDate = new Date();
      pool.query(
        'INSERT INTO recipe(title, url, image, website, "userId", "addedDate") VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
        [title, url, image, website, userId, addedDate],
        (error, response) => {
          if (error) return reject(error);
          resolve(response.rows);

          const recipeId = response.rows[0].id;

          return new Promise((resolve, reject) => {
            return RecipeTagTable.storeRecipeTag({
              recipeId,
              tagId,
            });
          })
            .then(() => resolve(response.rows[0]))
            .catch((error) => reject(error));
        },
      );
    });
  }

  static editRecipe({ title, url, image, website, tagId, recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE recipe SET title=$1, url=$2, image=$3, website=$4  WHERE id = $5',
        [title, url, image, website, recipeId],
        (error, response) => {
          if (error) return reject(error);

          resolve(response.rows);

          return new Promise((resolve, reject) => {
            return RecipeTagTable.editRecipeTag({ tagId, recipeId })
              .then(() => resolve(response.rows[0]))
              .catch((error) => reject(error));
          });
        },
      );
    });
  }

  static deleteRecipe({ recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM recipe WHERE id = $1', [recipeId], (error, response) => {
        if (error) return reject(error);
        resolve(response.rows);
      });
    });
  }

  static sortByTag({ tagId, page, limit }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT * FROM recipetags ' +
          'LEFT JOIN recipe on recipe.id = recipetags."recipeId"' +
          ' WHERE "tagId" = $1',
        [tagId],
        (error, response) => {
          if (error) return reject(error);
          const recipes = sortRecipes(response.rows);

          let result = pageItems(recipes, page, limit);
          resolve(result);
        },
      );
    });
  }
}

module.exports = RecipeTable;
