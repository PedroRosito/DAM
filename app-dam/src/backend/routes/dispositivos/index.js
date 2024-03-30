const express = require('express')

const routerDispositivo = express.Router()

routerDispositivo.get('/', function (req, res) {
    console.log('Estoy en dispositivos')
    res.send({'dispositivos': 'dispositivo1'}).status(200)
})

module.exports = routerDispositivo