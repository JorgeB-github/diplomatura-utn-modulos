var pool = require('./bd');
var md5 = require('md5');

//Funcion asicronica, ya que no se en que momento va a buscar estos datos -- y con el try y catch hace el manejo de errores

async function getUserByUsernameAndPassword(user,password){
    try {
        var query = 'select *from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }