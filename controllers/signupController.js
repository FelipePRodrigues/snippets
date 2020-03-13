//const loginModel = require('../models/loginModel');
const Db = require('../db/db')

exports.createGet = function(req, res) {
    res.render('signup', {  
        title: 'Sign Up'        
    });
}