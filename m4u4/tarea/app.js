var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { serialize } = require('v8');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'QazWSXedcplmokj10987',
  resave: false,
  saveUninitialized: true
}));

// #########################      TAREA    ####################################################################### 

app.get('/', function(req,res){
  var nota = Boolean(req.session.nronota);  
  
  
  res.render ('index', {
    title: 'Resultado de la evaluación',
    nota: nota,
    nronota: req.session.nronota,
    nombre: req.session.nombre,   
    calificacion: req.session.calificacion
  });
});


app.post('/calculo', function (req, res)
{
  let calificacion;
  if (req.body.nronota >= 7){
    req.session.nronota = req.body.nronota;
    req.session.nombre = req.body.nombre;
    calificacion = "APROBADO";
  }else if(req.body.nronota >= 4 && req.body.nronota < 7){
    req.session.nronota = req.body.nronota;
    req.session.nombre = req.body.nombre;
    calificacion = "RECUPERA";
  }else{
    req.session.nronota = req.body.nronota;
    req.session.nombre = req.body.nombre;
    calificacion = "RECURSA";
  }  
  req.session.calificacion = calificacion;
  res.redirect('/');
});



app.get('/salir', function (req, res)
{
  req.session.destroy();
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
