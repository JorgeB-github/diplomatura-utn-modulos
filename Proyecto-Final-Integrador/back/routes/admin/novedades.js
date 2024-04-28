var express = require("express");
var router = express.Router();
var novedadesModel = require("./../../models/novedadesModel");

router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  res.render("admin/novedades", {
    layout: "admin/layout",
    persona: req.session.nombre,
    novedades,
  });
});

router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});

router.post ('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})

/* PARA ELIMINAR NOVEDADES*/
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  await novedadesModel.deleteNovedades(id);
  res.redirect('/admin/novedades');
});



/* MODIFICAR 
/*1 traer el diseño mas los datos de la novedad*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);

  var novedad = await novedadesModel.getNovedadesById(id); /* traigo el registro */

  res.render('admin/modificar', {  /* me trae el render del modificar nuevo layout > donde me trae la info a través de novedad */
      layout: 'admin/layout',
      novedad 
  });
});


// Para modificar SOLO registro del objetos seleccionado
router.post('/modificar', async (req,res, next) => {
  try{

    var obj = {                       // genero el objeto para ver que pasa en el Titulo, SUbTitulo y Cuerpo
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)

    await novedadesModel.modificarNovedadesById(obj, req.body.id);   // Tengo el objeto y el ID
    res.redirect('/admin/novedades');    // una vez que modifique redirijo a novedades

    }catch (error) {
      console.log(error)  
      res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'no se modifico la novedad'
      })
    }
})










module.exports = router;
