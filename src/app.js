const express = require('express');
const routes = require('./routes/index');
const nunjucks = require('nunjucks');

const app = express();

app.set("view engine", "html");
nunjucks.configure("src/views/comment",{
    express: app
});


// 미들웨어 설정
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우팅
app.use(routes);

module.exports = app;

