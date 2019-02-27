const db = require("../models");
const path = require('path');

module.exports = function (app) {
    app.get('/api/monsters', function (req, res) {
        db.Monster.findAll({
        }).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    /*
    app.put('/api/inventory', function (req, res) { 
            db.Product.update(
                { stock_quantity: Object.values(req.body) }, // set attributes' value //
                { where: { id: Object.keys(req.body) } } // where criteria ///
             ).then(function () { res.json() })
        })
    */
}