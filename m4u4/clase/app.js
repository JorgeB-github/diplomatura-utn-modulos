var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// ################################################################################################
// CLASE 04-03 -- agrego la nueva dependencia 
var session = require('express-session');
// ################################################################################################


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ################################################################################################
// CLASE 04-03 -- Buscar la palabra publica y colocar debajo la clave
app.use(session({
  secret:'QazWSXedcplmokj10987',
  resave: false,
  saveUninitialized: true
}));


//llamo a una funcion en donde evaluo si el nomnre es conocido o no, enviando los datos de la siguiente manera metodo get
app.get('/', function(req,res){
  var conocido = Boolean(req.session.nombre);

  res. render ('index', {
    title: 'Sessions en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });
});


//Para campturar los datos metodo post
app.post('/ingresar', function(req, res)
//var datos = req.body.nombre //capturando
{
  if (req.body.nombre){
    req.session.nombre = req.body.nombre // guardo lo que viene en una variable de session
  }
  res.redirect('/');
});




// ################################################################################################












/* app.use('/', indexRouter);
app.use('/users', usersRouter); */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
