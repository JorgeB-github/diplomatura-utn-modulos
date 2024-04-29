var express = require("express");
var router = express.Router();
var novedadesModel = require("./../../models/novedadesModel");
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


//Trae los registros de la BD y los muestra en Proyecto-Final-Integrador/back/views/admin/novedades.hbs

router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  //con map creo un nuevo array de elemento

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill' //pad son propiedades de cloudinari
      });
      return {
        ...novedad,
        imagen
      }
    }else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });




  res.render("admin/novedades", {
    layout: "admin/layout",
    persona: req.session.nombre,
    novedades,
  });
});

//Agregar Obj a la BD + vista

router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});
// Agregar Obj a la BD 
router.post ('/agregar', async (req, res, next) => {
  try {
    
    var img_id = '';
    console.log(req.files.imagen);

    if(req.files && Object.keys(req.files).length > 0){
      imagen= req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      //await novedadesModel.insertNovedades(req.body); linea sin la IMG
      await novedadesModel.insertNovedades({
        ...req.body, //me traigo titulo sub y lo que pasa en cuerpo y le sumo
        img_id      // no tengo img o si
      });
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

  // Eliminar con IMG 
  let novedad = await novedadesModel.getNovedadesById(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }
  //FIN
  
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
      //Se agrega bloque de codigo para la modificacion con la IMG
      let img_id = req.body.img_original;   // me trae IMG original
      let borrar_img_vieja = false;    // genero una bariable en falso 

      if (req.body.img_delete === "1") {
        img_id = null;
        borrar_img_vieja = true;
      }else {
        if(req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          img_id = (await uploader (imagen.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
      }

      if (borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
      }
      
      //Fin del bloque


    var obj = {                       // genero el objeto para ver que pasa en el Titulo, SUbTitulo y Cuerpo
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id   // agrego por IMG
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
