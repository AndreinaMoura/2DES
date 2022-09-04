const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
// const lan = require("./src/lancamentos.csv");

const app = express();
app.use(cors());

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

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});