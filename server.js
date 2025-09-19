const express = require("express");
const cors = require("cors");

const ClientesRoutes = require("./src/routes/clientes.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(ClientesRoutes);

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});