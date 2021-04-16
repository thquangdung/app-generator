const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'testdb'
});

db.connect(function (err) {
    if(err) throw err;
    console.log('database connected successful!');                
});

module.exports = db;

// const connect = function () {
//     db.connect(function (err) {
//         if(err) throw err;
//         console.log('database connected successful!');                
//     });
// }

// const closeDB = function () {
//     db.end(function (err) {
//         if (!err) console.log('closed db')
//     })
// }

// exports.getAllUser = function (callbackQuery) {
//     connect();
//     db.query('select * from users', function (err, results, fields) {
//         if (!err) {
//             callbackQuery(results);
//         } else {
//             console.log(err);
//         }
//     })
// }

