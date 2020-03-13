const Router = require('express-promise-router')

const Db = require('../db/db')

const router = new Router();

module.exports = router

var signupController = require('../controllers/signupController')

router.get('/', signupController.createGet);