'use strict';

const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/order');

router.post('/order', orderCtrl.createOrder, orderCtrl.jsonOrder);
router.put('/order/:id', orderCtrl.getOrderById, orderCtrl.update, orderCtrl.jsonOrder);
router.get('/orders', orderCtrl.getOrders, orderCtrl.jsonOrder);
// router.get('/product/:id', productCtrl.getProductById, productCtrl.jsonProduct);
// router.delete('/product/:id', productCtrl.getProductById, productCtrl.deleteProduct, productCtrl.jsonProduct);


module.exports = router;
