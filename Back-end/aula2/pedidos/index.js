
const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(express.json());

app.post('/pedidos', (req, res) => {
    var id = -1;
    let priNome = req.body.priNome;
    let sobrenome = req.body.sobrenome;
    let endereco = req.body.endereco;
    let telefones = req.body.telefones.split("\r\n");
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.json("Dados recebidos com sucesso e enviados para o nosso Banco de Dados");
            id = result.insertId;
            telefones.forEach(e => {
                string = `insert into telefones value('${id}','${e}')`;
                con.query(string, (err, result) => {
                    if (err == null) {
                        res.json("Dados telefones com sucesso e enviados para o nosso Banco de Dados");
                    }
                });
            });
        } else {
            res.json("Dados recebidos com sucesso, porém não conseguimos enviar para o banco de dados");
        }
    });
});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});
// con.query(sql, err sucesso);