const express = require('express');
const router = express.Router();
const Controller = require('./Controller');

router.get('/sign/in', Controller.signIn);
router.get('/sign/up', Controller.signUp);


module.exports = router;
