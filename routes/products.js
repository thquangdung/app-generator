const controlerProduct = require('../controllers/products');
const express = require('express');
const router = express.Router();

router.get('/', controlerProduct.getProducts);
// router.get('/add-product', controlerProduct.addProduct);

module.exports = router;
