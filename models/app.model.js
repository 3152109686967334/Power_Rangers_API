var mysql = require('../helpers/database');

exports.getCustomers = (cb) => {
    //SQL QUERY
    var q = `SELECT * FROM distance `;

    //Execute QUERY and GET RESULTS
    mysql.query(q, (err, results) => {
        if (err) {
            console.log(err);
            cb(err, null);
        } else {
            cb(null, results);
        }
    });
}
exports.getOffices = (cb) => {
    var a = `select name from distance where Education='distance'`;
    mysql.query(a, (err, results) => {
        if (err) {
            console.log(err);
            cb(err, null);
        } else {
            cb(null, results);
        }
    });
}
exports.getcity = (cb) => {
    var a = `select name,Address from distance` ;
    mysql.query(a, (err, results) => {
        if (err) {
            console.log(err);
            cb(err, null);
        } else {
            cb(null, results);
        }
    });
}