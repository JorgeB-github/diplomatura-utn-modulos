var express = require('express');
var router = express.Router();
var usuariosModels = require ('./../../models/usuariosModel');


router.get('/', function(req, res, next) {
  res.render('admin/login',{
    layout: 'admin/layout'
  });
});

router.post('/', async (req,res,next) => {
  try{
    var usuarios = req.body.usuarios; // captura la info
    var password = req.body.password; // captura la password

    var data = await usuariosModels.getUserByUsernameAndPassword(usuarios, password); // capturo los datos

    if (data != undefined) {
      
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      
      res.redirect('/admin/novedades');      
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error){
    console.log(error);
  }
});


module.exports = router;

