const { Router } = require('express');
const RatingTable = require('../rating/table');
const authenticate = require('../user/authenticate');

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const ratings = await RatingTable.getAllRatings();
    res.send(ratings);
  } catch (e) {
    next(e);
  }
});

router.get('/:recipeId', async (req, res, next) => {
  try {
    const { recipeId } = req.params;

    const ratings = await RatingTable.getRecipeRating({ recipeId });
    res.send(ratings);
  } catch (e) {
    next(e);
  }
});

router.post('/new', async (req, res, next) => {
  try {
    const { rate, userId, recipeId } = req.body;
    const { sessionString } = req.cookies;

    if (rate < 1 || rate > 5) {
      const error = new Error('Number out of range');
      error.statusCode = 412;

      next(error);
    } else {
      const response = await authenticate(sessionString, userId);

      if (response) {
        const { rating } = await RatingTable.getRating({ recipeId, userId });

        if (!rating) {
          const newRating = await RatingTable.storeRating({
            rate,
            recipeId,
            userId,
          });
          res.send(newRating);
        } else {
          const newRating = await RatingTable.changeRating({
            rate,
            recipeId,
            userId,
          });
          res.send(newRating);
        }
      } else {
        const error = new Error('Invalid session');
        error.statusCode = 400;

        next(error);
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
