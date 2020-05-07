const { Router } = require('express');
const CommentTable = require('../comments/table');
const UserTable = require('../user/table');
const { hash } = require('../user/helper');
const authenticate = require('../user/authenticate');

const router = new Router();

router.get('/:recipeId', async (req, res, next) => {
  try {
    const { recipeId } = req.params;

    const response = await CommentTable.getRecipeComment({ recipeId });
    res.send(response);
  } catch (e) {
    next(e);
  }
});

router.post('/:recipeId', async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const { content, userId } = req.body;
    const { sessionString } = req.cookies;

    const response = await authenticate(sessionString, userId);
    if (response) {
      const { email } = response;
      const emailHash = hash(email);
      const user = await UserTable.getUser({ emailHash });
      const response2 = await CommentTable.addComment({
        recipeId,
        content,
        email,
        userId: user.id,
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

router.put('/:commentId', async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const { content, userId } = req.body;
    const { sessionString } = req.cookies;

    const response = await authenticate(sessionString, userId);
    if (response) {
      const { email } = response;
      const response = await CommentTable.editComment({
        commentId,
        content,
        email,
      });
      res.send(response);
    } else {
      const error = new Error('Invalid session');
      error.statusCode = 400;

      next(error);
    }
  } catch (e) {
    next(e);
  }
});

router.delete('/:commentId', async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const { userId } = req.body;
    const { sessionString } = req.cookies;
    const response = await authenticate(sessionString, userId);
    if (response) {
      const response2 = await CommentTable.deleteComment({ commentId });
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

module.exports = router;
