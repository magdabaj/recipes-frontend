const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// const users = require('./server/users');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/users', users);

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});
app.listen(port);