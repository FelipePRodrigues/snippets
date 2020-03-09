/*
var loginController = require('../controllers/loginController')
const express = require('express');
let router = express.Router();

router.get('/', loginController.createGet);
router.post('/', loginController.createPost);

module.exports = router;
*/


const Router = require('express-promise-router')

const Db = require('../db/db')

const router = new Router();

module.exports = router


var loginController = require('../controllers/loginController')

router.get('/', loginController.createGet);
/*
router.post('/', async (req, res) => {
    await Db.query('SELECT NOW() as now').then((result) => {
        let teste = result.rows[0];
        res.send(req.body.email + ' ' + req.body.password + ' ' + result.rows[0].now);
    });    
});
*/

router.post('/', loginController.createPost)