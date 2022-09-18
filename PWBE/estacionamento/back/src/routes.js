const Express = require('express');

const router = Express.Router();

const ClientesController = require("./controllers/ClientesController");
const VeiculosController = require("./controllers/VeiculosController");
const VagasController = require("./controllers/VagasController");
const EntradasController = require("./controllers/EntradasController");

router.get("/estacionamento/clientes", ClientesController.listarClientes);
router.get("/estacionamento/clientes/:id", ClientesController.listarCliente);
router.get("/estacionamento/veiculos", VeiculosController.listarVeiculos);
router.get("/estacionamento/veiculos/:placa", VeiculosController.listarVeiculo);
router.get("/estacionamento/vagas", VagasController.listarVagas);
router.get("/estacionamento/entradas", EntradasController.listarEntradas);

router.post("/estacionamento/entradas", EntradasController.cadastrarEntrada);

router.put("/estacionamento/entradas", EntradasController.editarEntrada);

module.exports = router;