var appModel = require('../models/app.model');

exports.getCustomers = (req, res) => {
    appModel.getCustomers((err, results) => {
        console.log(results);
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });
        } else {
            res.status(200).json({
                "code": 200,
                "message": "poweranger",
                "data": results
            });
        }
    });
}

exports.getOffices = ((req, res) => {
    appModel.getOffices((err, results) => {
        console.log(results);
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });

        } else {
            res.status(200).json({
                "code": 200,
                "message": "distance",
                "data": results
            })
        }
    })
})
exports.getcity = ((req, res) => {
    appModel.getcity((err, results) => {
        console.log(results);
        if (err) {
            res.status(404).json({
                "code": 404,
                "message": err
            });

        } else {
            res.status(200).json({
                "code": 200,
                "message": "distance",
                "data": results
            })
        }
    })
})