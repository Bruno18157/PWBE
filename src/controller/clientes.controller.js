const clientes = require("../data/clientes.data");

const cadastrar = (req, res) => {
    const novoCliente = req.body;
    clientes.push(novoCliente);
    res.send("Cadastrado com sucesso!").end();
};

const buscar = (req, res) => {
    const cpfCliente = req.params.id;

    var user = "Não Encontrado";

    usuarios.forEach((cliente, index) => {
        if(cliente.cpf === cpfCliente){
            user = cliente;
        }
    });

    res.send(user).end()
}
module.exports = {
    cadastrar,
    buscar
};