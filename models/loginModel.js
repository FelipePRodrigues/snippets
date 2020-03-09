const DATABASE = require('../helpers/database');
const Db = require('../db/db')

module.exports = {
    Login: async (username, password) => {
        /*
        DATABASE.connect();
        
        DATABASE.query('SELECT NOW() as now', (err, res) => {
            
            if (err) throw err;
            
            let retorno = [];
            
            for (let row of res.rows) {
                retorno.push(row);
                //console.log(JSON.stringify(row));
            }
            
            DATABASE.end();  
            
            return retorno;
        });        
        */
        
        return await Db.query('SELECT NOW() as now');
    }
}