const pedidos = require("../data/pedidos.data");

const atualizar = (req, res) => {
    const idPedido = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    pedidos.forEach((pedido, index) => {
        if(pedido.id === idPedido) indice = index;
    });

    if(indice === -1){
        res.status(404).end();
    }else {
    Object.keys(novosDados).forEach((key) => {
        pedidos[indice][key] = novosDados[key];
    });
    res.status(204).end();
}
};

module.exports = {
    atualizar
};