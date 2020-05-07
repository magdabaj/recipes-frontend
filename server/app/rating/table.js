const pool = require('../../databasePool');

class RatingTable {
  static getRating({ recipeId, userId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT rate,"recipeId","userId" FROM rating WHERE "userId" = $1 AND "recipeId" = $2',
        [userId, recipeId],
        (error, response) => {
          if (error) return reject(error);

          resolve({ rating: response.rows[0] });
        },
      );
    });
  }

  static getAllRatings() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM rating', (error, response) => {
        if (error) return reject(error);

        resolve(response.rows);
      });
    });
  }

  static getRecipeRating({ recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM rating WHERE "recipeId" = $1', [recipeId], (error, response) => {
        if (error) return reject(error);

        const ratings = response.rows;

        let ratingsMean = countMean(ratings);

        resolve({ ratings: response.rows, ratingsMean: ratingsMean });
      });
    });
  }

  static deleteRatings({ recipeId }) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM rating WHERE "recipeId" = $1', [recipeId], (error, response) => {
        if (error) return reject(error);

        resolve(response.rows);
      });
    });
  }

  static changeRating({ rate, recipeId, userId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE rating SET rate = $1 WHERE "recipeId" = $2 AND "userId" = $3 RETURNING "recipeId"',
        [rate, recipeId, userId],
        (error, response) => {
          if (error) return reject(error);

          const recipeId = response.rows[0].recipeId;

          RatingTable.getRecipeRating({ recipeId }).then(({ ratingsMean }) => {
            resolve({
              message: 'rating changed successfully',
              recipeId: recipeId,
              ratingsMean,
            });
          });
        },
      );
    });
  }

  static storeRating({ rate, recipeId, userId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO rating(rate, "recipeId", "userId") VALUES($1, $2, $3) RETURNING "recipeId"',
        [rate, recipeId, userId],
        (error, response) => {
          if (error) return reject(error);

          const recipeId = response.rows[0].recipeId;

          RatingTable.getRecipeRating({ recipeId }).then(({ ratingsMean }) => {
            resolve({
              message: 'rating changed successfully',
              recipeId: recipeId,
              ratingsMean,
            });
          });
        },
      );
    });
  }
}

const countMean = (ratings) => {
  let ratingsSum = 0;
  let ratingsMean;

  ratings.forEach((rate) => {
    ratingsSum += rate.rate;
  });

  ratingsMean = ratingsSum / ratings.length;
  return Number(ratingsMean.toFixed(1));
};

module.exports = RatingTable;
