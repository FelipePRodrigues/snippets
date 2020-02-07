var loginController = require('../controllers/loginController')
const express = require('express');
let router = express.Router();


router.get('/', loginController.createGet);
router.post('/', loginController.createPost);

module.exports = router;