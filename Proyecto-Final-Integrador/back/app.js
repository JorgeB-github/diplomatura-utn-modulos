var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload'); // indico a travez de una variable que voy a atrabajar con subidas de archivos
var cors = require('cors'); // indico a mi app que se requiere esta dempendecia CORS

require('dotenv').config();
//Se vio en la unidad 4
var session = require('express-session');


var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


// Visto en clase 4/3
var loginRouter = require('./routes/admin/login');
var addmintRouter = require('./routes/admin/novedades');

//generamos la API
var apiRouter = require('./routes/api');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//me traigo el codigo de la unidad 4 para que al no 
app.use(session({
  secret:'QazWSXedcplmokj10987',
  cookie: {maxAge: null},
  resave: false,
  saveUninitialized: true
}));

secured = async (req, res, next) => {
  try{
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();      
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

//coloco como se crea el archivo temp dela subida
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));




app.use('/', indexRouter);
app.use('/users', usersRouter);

// Visto en clase 4/3
app.use('/admin/login', loginRouter);

app.use('/admin/novedades', secured, addmintRouter);

//utilizo la API
app.use('/api', cors(), apiRouter);

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
