var pool = require('./bd');

//Traer los datos de la tabla

async function getNovedades() {
    try {
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;   
    } catch (error) {
        console.error("Error al obtener las novedades:", error);
        throw error; 
    }
}

//Insertar un registro a la tabla

async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;   
    } catch (error) {
        console.error("Error al insertar registro:", error);
        throw error; 
    }
} // insert


// Delete novedad
async function deleteNovedades(id){
    var query =  "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}


//Modificar 
//(traer una sola novedad por el id)

async function getNovedadesById(id) {
    var query = 'select * from novedades where id = ?';    
    var rows = await pool.query(query,[id]);
    return rows[0];
}
 // para modificar UPDATE del dato PREVIAMENTE SELECCIONADO
async function modificarNovedadesById (obj, id){  // es un obj porque tengo titulo subtitulo es un conjunto de datos que paso
    try{
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertNovedades, deleteNovedades, getNovedadesById, modificarNovedadesById };