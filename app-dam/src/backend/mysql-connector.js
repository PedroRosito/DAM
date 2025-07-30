const mysql = require('mysql')

const config = {
    connectionLimit: 10,
    host: 'mysql-server',
    port: '3306',
    user: 'root',
    password: 'userpass',
    database: 'DAM'
}

const pool = mysql.createPool(config)

pool.getConnection((err, conn) => {
    if (err) {
        switch(err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('La conexión a la BD se cerró.')
                break
            case 'ER_CON_COUNT_ERROR':
                console.error('La base de datos tiene muchas conexiones.')
                break
            case 'ECONNREFUSED':
                console.error('La conexión fue rechazada')
        }
    }
    if (conn) {
        console.log(conn)
        conn.release()
    }
})

module.exports = pool
