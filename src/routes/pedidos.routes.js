const express = require("express");
const router = express.Router();

const PedidosController = require("../controller/pedidos.controller");

router.patch("/pedidos/:id", PedidosController.atualizar);

module.exports = router;