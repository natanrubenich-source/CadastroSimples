// Importações
require("dotenv").config();
const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");

// Configuração da API
const app = express();
app.use(express.json());

// Rotas!!
app.use("/usuarios", usuarioRoutes);

// Inicialização da API
const PORT = process.env.API_PORT;
app.listen(PORT, () => 
    console.log(`O servidor está rodando em localhost:${PORT}/`));