const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const recipeRouter = require('./server/app/api/recipe');
const userRouter = require('./server/app/api/user');
const tagRouter = require('./server/app/api/tag');
const ratingRouter = require('./server/app/api/rating');
const commentRouter = require('./server/app/api/comment');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors({ origin: 'http://localhost:5000', credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());


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

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);