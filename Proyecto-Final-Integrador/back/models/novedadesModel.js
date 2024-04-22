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

module.exports = { getNovedades };