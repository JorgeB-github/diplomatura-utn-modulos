var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('productos'); // se dirige a la carpeta view
});

module.exports = router;