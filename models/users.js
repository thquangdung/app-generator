const db = require('./database');

let data = [];

module.exports = class Users {
    constructor() {

    }

    static fetchAll() {
        const sql = 'select * from users';
        db.query(sql, function (err, results, fields) {
            if (err) throw err
            data = results;
        });

        return data;
    }
}