const Express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const conDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "lojinha"
});

const app = Express();
app.use(Express.json());
app.use(cors());

app.get("/produtos", (req, res) => {
    let query = "select * from produtos";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(402).end();
        }
    })
});

app.post("/produtos", (req, res) => {
    //req.query é o dado que vem atraves da url => http://localhost:3000/produtos?cod=CJ1234
    //req.params é o dado que vem atraves da url => http://localhost:3000/produtos/CJ1234/teste => "/produtos/:cod/:nome"
    // console.log(req.body);

    let query = `INSERT INTO produtos VALUES (DEFAULT, '${req.body.cod}', '${req.body.nome}',${req.body.qntd} ,${req.body.preco})`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
});

app.get("/produtos/:cod", (req, res) => {

    let query = `select * from produtos where cod = '${req.params.cod}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.params).end();
        } else {
            res.status(400).json(err).end();
        }
    })
});

app.listen(3000, () => {
    console.log("App ON");
})