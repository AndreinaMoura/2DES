const express = require('express');
const app = express();

app.use(express.json());

app.get('/projeto1', (req, res) => {
    res.json("Alô mundo coisa");
});

app.listen(3000, () => {//acima de 1000 ou o numero 80
    console.log("Respondendo na porta 3000");
});