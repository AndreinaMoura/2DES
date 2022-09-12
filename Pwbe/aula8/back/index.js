const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
// const lan = require("./src/lancamentos.csv");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'locadora'
});

app.get('/locadora/usuarios', (req, res) => {
    let string = "select * from usuarios";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.get('/locadora/filmes', (req, res) => {
    let string = "select * from filmes";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.get('/locadora/aluga', (req, res) => {
    let string = "select * from aluga";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

// app.post('/locadora/clientes',(req,res)=>{
//     let query = `insert into usuarios values (default, '${req.body.nome}', ${req.body.endereco}, '${req.body.telefone}')`;
//     con.query(query, (err, result) => {
//         if(err == null) {
//             res.status(201).json(req.body).end();
//         }else {
//             res.status(400).json(err).end();
//         }
//     });
// });

// app.post('/locadora/locacoes',(req,res)=>{
//     let query = `insert into aluga values (default, '${req.body.codigo_cli}', ${req.body.codigo_filme}, '${req.body.data_locacao}')`;
//     con.query(query, (err, result) => {
//         if(err == null) {
//             res.status(201).json(req.body).end();
//         }else {
//             res.status(400).json(err).end();
//         }
//     });
// });

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});