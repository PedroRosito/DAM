//=======[ Settings, Imports & Data ]==========================================
var PORT    = 3000;

var express = require('express')
var cors = require('cors')
const jwt = require('jsonwebtoken')

const routerDispositivos = require('./dispositivos/index')

var app = express();

const corsOptions = {
    // Solo para desarrollo
    origin: '*',
}

const YOUR_SECRET_KEY = 'mi llave'
var testUser = {username: 'test', password: '1234'}

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

app.use(cors(corsOptions))

//=======[ Main module code ]==================================================

var authenticator = function (req, res, next) {
    let autHeader = (req.headers.authorization || '')
    if (autHeader.startsWith('Bearer ')) {
        token = autHeader.split(' ')[1]
    } else {
        res.status(401).send({ message: 'Se requiere un token de tipo Bearer' })
    }
    jwt.verify(token, YOUR_SECRET_KEY, function(err) {
      if(err) {
        res.status(403).send({ message: 'Token inválido' })
      }
    })
    next()
}


var cb0 = function (req, res, next) {
    console.log('CB0')
    
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res, next) {
    res.send({'mensaje': 'Hola DAM!'}).status(200)
}

app.post('/login', (req, res) => {
    if (req.body) {
        var userData = req.body

        if (testUser.username === userData.username && testUser.password === userData.password) {
            var token = jwt.sign(userData, YOUR_SECRET_KEY)
            res.status(200).send({
                signed_user: userData,
                token: token
            })
        } else {
            res.status(403).send({
                errorMessage: 'Auth required'
            })
        }
    } else {
        res.status(403).send({
            errorMessage: 'Se requiere un usuario y contraseña'
        })
    }
})

app.get('/prueba', authenticator, function(req, res) {
    res.send({message: 'Está autenticado, accede a los datos'})
})

app.all('/secreto', function (req, res, next) {
    console.log(req.method)
    res.send('Secreto').status(200)
})

app.get('/', [cb0, cb1, cb2]);

app.use(authenticator, routerDispositivos)

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
