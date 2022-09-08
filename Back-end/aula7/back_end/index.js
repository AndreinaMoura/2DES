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
    database: 'livrocaixa'
});

app.get('/livrocaixa/lancamentos',(req,res)=>{
    let string = "select * from lancamentos";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.post('/livrocaixa/lancamentos',(req,res)=>{
    let query = `insert into lancamentos values (default, '${req.body.data}', '${req.body.desDriDao}', ${req.body.valor}, '${req.body.tipo}')`;
    con.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});