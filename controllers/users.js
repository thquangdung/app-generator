// const modelProduct = require('../models/products');

exports.getUser = (req, res, next) => {
    // const listProd = modelProduct.fetchAll();
    res.render('users', { title: 'User login successful!' });
}
