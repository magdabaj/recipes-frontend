const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const recipeRouter = require('./api/recipe');
const userRouter = require('./api/user');
const tagRouter = require('./api/tag');
const ratingRouter = require('./api/rating');
const commentRouter = require('./api/comment');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../../dist')));

// adding the frontend origin
app.use(bodyParser.json());
app.use(cors({ origin: 'https://afternoon-plateau-23579.herokuapp.com/', credentials: true }));
app.use(cookieParser());

app.use('/recipe', recipeRouter);
app.use('/user', userRouter);
app.use('/tags', tagRouter);
app.use('/rating', ratingRouter);
app.use('/comment', commentRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error',
    message: err.message,
  });
});

module.exports = app;
