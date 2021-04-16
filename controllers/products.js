const modelProduct = require('../models/products');

exports.getProducts = (req, res, next) => {
    const listProd = modelProduct.fetchAll();
    res.render('products', {list:listProd});
}
