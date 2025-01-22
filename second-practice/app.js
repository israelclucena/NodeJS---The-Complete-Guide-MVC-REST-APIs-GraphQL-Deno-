const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First Middleware Here!');
    next();
});


app.use((req, res, next) => {
    console.log('Second Middleware Here!');
    // res.send('<p>Assignment Done! (Almost) <\p>');
    next();
});

app.use('/users' ,(req, res, next) => {
    console.log('"/users" Middleware Here!');
    res.send('<p>The middleware that handles just "/users"<\p>');
});


app.use('/', (req, res, next) => {
    console.log('"/" Middleware Here!');
    res.send('<p>The middleware that handles just "/"<\p>');
});


app.listen(3000);