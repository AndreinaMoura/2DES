const departamento = require('../models/departamento.model');
const con = require('../dao/solicitacoes.dao');

const criarDepto = (req, res) => {
    con.query(departamento.create(req.body))
}

const excluirDepto = (req, res) => {

}