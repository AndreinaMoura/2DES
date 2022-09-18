const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarVeiculos(req, res) {
    let query = "SELECT * FROM veiculos";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listarVeiculo(req, res) {
    let query = `SELECT * FROM veiculos WHERE placa = ${req.params.placa}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};


module.exports = {
    listarVeiculos,
    listarVeiculo
}