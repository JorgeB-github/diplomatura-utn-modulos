var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nosotros'); // se dirige a la carpeta view
});

module.exports = router;