const express = require('express')
const pool = require('../../mysql-connector')

const routerDispositivo = express.Router()

routerDispositivo.get('/', function (req, res) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerDispositivo