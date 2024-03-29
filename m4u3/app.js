var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// ########################################################################################################################################################################
// CLASE 26-02 //
// El primer paso para usar controladores de rutas, es crear la variable 
var precioRouter = require('./routes/precio');
// ########################################################################################################################################################################



// ########################################################################################################################################################################
// CLASE 26-02 -- TAREA //
var nosotrosRouter = require('.routes/nosotros');
var asistenciaRouter = require('.routes/asistencia');
var productosRouter = require('.routes/productos');
// ########################################################################################################################################################################


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// ########################################################################################################################################################################
// CLASE 26-02 -- TAREA //
app.use('/nosotros', nosotrosRouter);
app.use('/asistencia', asistenciaRouter);
app.use('/productos', productosRouter);
// ########################################################################################################################################################################



// ########################################################################################################################################################################
// El segundo paso es usarlo y se usa de la siguiente manera, cuando reciba ../precios me llama al controlador
app.use('/precio', precioRouter);
// ########################################################################################################################################################################



// ########################################################################################################################################################################
// CLASE 26-02 //
// CLASE 26-02 -- cuando la ruta viene http://localhost:3000/prueba, me responde con una página que dice Hola soy la página de pruebas
app.get('/prueba', function(req,res) {
  res.send('Hola soy la pagina de pruebas')
})

app.get('/prueba', function(req,res) {
  res.send('Hola soy la pagina de pruebas')
})

app.get('/prueba', function(req,res) {
  res.send('Hola soy la pagina de pruebas')
})

// ########################################################################################################################################################################


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
