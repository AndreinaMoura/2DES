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
        }else{
            res.json(err).status(402).end();
        }
    })
})

app.listen(3000, () => {
    console.log("App ON");
})