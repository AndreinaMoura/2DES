const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
});

app.use(express.json());

app.get('/pedidos', (req, res) => {
    res.json("Dados recebidos com sucesso, estamos enviando para o nosso Banco de Dados");
    let priNome = req.query.priNome;
    let sobrenome = req.query.sobrenome;
    let endereco = req.query.endereco;
    let telefones = req.query.telefones;
    // update pedidos;
    // where nome = req.params.priNome;
    // set id = req.params.id;
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`;
    let string2 = `insert into telefones value(7,'${telefones}')`;
    con.query(string2, (err, result) => {
        if (err == null) {
            res.json("Dados recebidos com sucesso e enviando para o nosso Banco de Dados");
        } else {
            res.json("Dados recebidos com sucesso, porém não conseguimos enviar para o Banco de Dados");
        }
    });
    con.query(string, (err, result) => {
        if (err == null) {
            res.json("Dados recebidos com sucesso e enviando para o nosso Banco de Dados");
        } else {
            res.json("Dados recebidos com sucesso, porém não conseguimos enviar para o Banco de Dados");
        }
    });
});

app.listen(3000, () => {//acima de 1000 ou o numero 80
    console.log("Respondendo na porta 3000");
});