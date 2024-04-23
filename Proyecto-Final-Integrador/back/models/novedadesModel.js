var pool = require('./bd');

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

async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;   
    } catch (error) {
        console.error("Error al insertar registro:", error);
        throw error; 
    }
}


module.exports = { getNovedades, insertNovedades };