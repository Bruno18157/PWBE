const produtos = require("../data/produtos.data");

const alterar = (req, res) => {
    const produtoAlterado = req.body;

    produtos.forEach((produto, index) => {
        if(produto.id === produtoAlterado.id) {
            produtos[index] = produtoAlterado;
            encontrei = true;
        }
    });

    if(encontrei === false) {
        res.status(404).end();
    }else {
        res.status(201).end();
    }
};

const atualizar = (req, res) => {
    const idProduto = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.id === idProduto) indice = index;
    });

    if(indice === -1){
        res.status(404).end();
    }else {
    Object.keys(novosDados).forEach((key) => {
        produtos[indice][key] = novosDados[key];
    });
    res.status(204).end();
}
const excluir = (req, res) => {
    const idProduto = req.params.id;

    var indice = -1;
    produtosos.forEach((produto, index) => {
        if(produto.id === idProduto) {
            indice = index
        }
});

    if(indice === -1) {
        res.status(404).end(); 
    }else {
        usuarios.splice(indice, 1);
        res.status(204).end();
    }
};

};
module.exports = {
    alterar,
    atualizar,
    excluir
};