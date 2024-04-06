const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function (req, res, next) {
    mysql.createConnection({
        host: 'localhost',
        user: 'deyvid',
        password: '*Bruna271098',
        database: 'desafioexpressmysql',
        port: 3306
    }).then((connection) => {
        connection.query('SELECT * FROM clientes;').then((resultClientes) => {
            connection.query('SELECT * FROM produtos;').then((resultProdutos) => {
                res.send({
                    clientes: resultClientes[0],
                    produtos: resultProdutos[0]
                });
            });
        });
    });
});

module.exports = router;
