const db = require('./database');

let data = [];

module.exports = class Product {
    constructor() {};

    static fetchAll() {
        const sql = `select * from products`;
        db.query(sql, function (err, results) {
            if (err) throw err
            data = results;
        });
        return data;
    };

    static insert(product) {
        const sql = `insert into products set ?`;
        db.query(sql,product, function (err, data) {
            if(err) throw err;
            return true
        })
    };
}
