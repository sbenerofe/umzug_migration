var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
var db = require('./models');
async function setupDB(db) {
  //return await db.sequelize.sync({ force: false });
  return await db.sequelize.sync({ force: false });
}

setupDB(db).then(console.log('db setup'));

// error handler
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started for (db)  at port ${PORT} `)
);

module.exports = app;
