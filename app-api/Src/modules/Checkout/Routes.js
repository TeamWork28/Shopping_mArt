const express = require('express');
const router = express.Router();
const Controller = require('./Controller');

router.get('/get/cart', Controller.getCart);
router.post('/add/cart', Controller.addCart);
router.delete('/remove/cart', Controller.removeCart);
router.put('/update/cart', Controller.updateCart);
router.put('/place/order', Controller.placeOrder);


module.exports = router;