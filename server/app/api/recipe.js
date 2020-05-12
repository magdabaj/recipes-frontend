const { Router } = require('express');
const RecipeTable = require('../recipe/table');
const UserTable = require('../user/table');
const { hash } = require('../user/helper');
const authenticate = require('../user/authenticate');
const RatingTable = require('../rating/table');
const CommentTable = require('../comments/table');
const RecipeTagTable = require('../recipeTag/table');

const router = new Router();

router.get('', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const recipes = await RecipeTable.getRecipes({ page, limit });
    res.send(recipes);
  } catch (e) {
    next(e);
  }
});

router.get('/:recipeId', async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const recipe = await RecipeTable.getRecipe({ recipeId });
    res.send(recipe);
  } catch (e) {
    next(e);
  }
});

router.get('/user/:email', async (req, res, next) => {
  try {
    const { email } = req.params;
    const emailHash = hash(email);

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const { user } = await UserTable.getUser({ emailHash });
    const response = await RecipeTable.getUserRecipes({ user, page, limit });
    if (response) res.send(response);
    else res.send({ message: 'User has no articles yet' });
  } catch (e) {
    next(e);
  }
});

router.get('/tag/:tagId', async (req, res, next) => {
  try {
    const { tagId } = req.params;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const recipes = await RecipeTable.sortByTag({ tagId, page, limit });

    if (recipes) res.send(recipes);
    else res.send('There are no articles with this tag yet');
  } catch (e) {
    next(e);
  }
});

router.post('/new/:userId', async (req, res, next) => {
  try {
    const { title, url, image, website, tagId } = req.body;
    const { userId } = req.params;
    const { sessionString } = req.cookies;

    // todo check if recipes aren't the same by url
    // todo add images to folder !important

    const response = await authenticate(sessionString, userId);

    if (response) {
      const recipeId = await RecipeTable.storeRecipe({
        title,
        url,
        image,
        website,
        userId,
        tagId,
      });
      res.send(recipeId);
    } else {
      const error = new Error('Invalid session');

      error.statusCode = 400;

      next(error);
    }
  } catch (e) {
    next(e);
  }
});

router.put('/edit/:recipeId', async (req, res, next) => {
  try {
    const { title, url, image, website, tagId, userId } = req.body;
    const { recipeId } = req.params;
    const { sessionString } = req.cookies;

    const response = await authenticate(sessionString, userId);

    if (response) {
      const response2 = await RecipeTable.editRecipe({
        title,
        url,
        image,
        website,
        tagId,
        recipeId,
      });
      res.send(response2);
    } else {
      const error = new Error('Invalid session');
      error.statusCode = 400;
      next(error);
    }
  } catch (e) {
    next(e);
  }
});

router.delete('/delete/:recipeId', async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { recipeId } = req.params;
    const { sessionString } = req.cookies;

    const response = await authenticate(sessionString, userId);
    if (response) {
      await RecipeTagTable.deleteRecipeTags({ recipeId });
      await Promise.all([
        RatingTable.deleteRatings({ recipeId }),
        CommentTable.deleteComments({ recipeId }),
        RecipeTable.deleteRecipe({ recipeId }),
      ]);
      res.send({ message: 'RecipeWrapper deleted successfully' });
    } else {
      const error = new Error('Invalid session');

      error.statusCode = 400;

      next(error);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
