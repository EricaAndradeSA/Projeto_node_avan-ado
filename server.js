const express = require ('express');
const routes = require('./src/routes');
const server = express();
// configurar entrada de dados pelo corpo da requisição
server.use(express.static ('public'));
server.use(express.json());
server.use(express.urlencoded({extended: true}));
// configurar o motor javascript
server.set('view engine', 'ejs');
server.set('views', './src/app/views');
// extrair rotas e pedir para o servidor utilizar
server.use(routes);
// criando porta do servidor
server.listen(3333, function(){
    console.log('server rodando')
});
