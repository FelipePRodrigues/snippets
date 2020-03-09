const loginModel = require('../models/loginModel');
const Db = require('../db/db')

exports.createGet = function(req, res) {
    res.render('login', {  
        title: 'Login'        
    });
}

exports.createPost = async function(req, res, next){     
    try {
        
        /*
        await Db.query('SELECT NOW() as now').then((result) => {
            let teste = result.rows[0];
            res.send(req.body.email + ' ' + req.body.password + ' ' + result.rows[0].now);
        });   
        */
        
        let result = await loginModel.Login('teste', 'teste')
        res.send(req.body.email + ' ' + req.body.password + ' ' + result.rows[0].now);        
        
    } catch (error) {
        console.log(error.message);
    }
}