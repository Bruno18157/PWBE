const express = require("express");
const router = express.Router();

const ProdutosController = require("../controller/produtos.controller");

router.patch("/produtos/:id", ProdutosController.atualizar);
router.put("/produtos/", ProdutosController.alterar);
router.delete("/produtos/:id", ProdutossController.excluir);

module.exports = router;