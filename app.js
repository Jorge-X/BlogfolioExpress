const express = require('express');
const app = express();
const path = require('path');


// Configuração para servir arquivos estáticos do diretório "assets"
app.use('/', express.static(path.join(__dirname, 'assets')));

// Configuração para servir arquivos estáticos do Bootstrap
app.use('/', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Configuração para servir arquivos estáticos do jQuery
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// Define o diretório para as views
app.set('views', path.join(__dirname, 'views'));

// Define o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Inicialização do servidor
app.listen(4001, () => {
    console.log('Servidor rodando em http://localhost:4001');
});


