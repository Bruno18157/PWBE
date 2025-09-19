const express = require("express");
const router = express.Router();

const ClientesController = require("../controller/clientes.controller");

router.post("/clientes", ClientesController.cadastrar);
router.get("/clientes/:cpf", ClientesController.buscar);

module.exports = router;