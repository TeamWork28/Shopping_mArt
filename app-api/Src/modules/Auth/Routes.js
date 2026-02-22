const express = require('express');
const router = express.Router();
const Controller = require('./Controller');

router.get('/role', Controller.role);
router.post('/sign/in', Controller.signIn);
router.post('/sign/up', Controller.signUp);


module.exports = router;
