var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var livroRouter = require('./routes/livros'); 
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());  // Corrigido para usar express.json()
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', function(req, res) {
  res.send('Olá, Mundo!');
});
app.use('/users', function(req, res) {
  res.send('Usuários');
});

app.use('/livros', livroRouter);  // Rota de livros

module.exports = app;
