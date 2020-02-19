exports.createGet = function(req, res) {
    res.render('login', {  
        title: 'Login'        
    });
}

exports.createPost = function(req, res, next){
    let email = req.body.email;
    let password = req.body.password;      
    
    const { Client } = require('pg');
    
    const client = new Client({
        user: 'odymyorzclkmua',
        host: 'ec2-52-45-75-24.compute-1.amazonaws.com',
        database: 'd2gms89mo99to7',
        password: '57b10c2232ca733eddb1935e4fee6297536f3452e8c90436a779b9ad3bdf4b1b',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }        
    });
    
    client.connect();
    
    client.query('SELECT NOW() as now', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    });
    
    
    res.send(email + ' ' + password);
}