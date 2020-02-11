exports.createGet = function(req, res) {
    res.render('login', {  
        title: 'Login'        
    });
}

exports.createPost = function(req, res, next){
    let email = req.body.email;
    let password = req.body.password;      
    
    res.send(email + ' ' + password);
}