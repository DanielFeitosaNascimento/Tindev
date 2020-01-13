/*
*
*
Existem métodos na api para lidar com as requisições 
cada request no serve tem rota e pontos principais de ação dentro do meu código 
as principais e mais utilizadas são GET, POST , DELETE , PUT.
GET - Cria uma rota para busca alguma informação 
POST - Cria algum tipo de registro ou entidade dentro da API
DELETE - Deleta informações/dados dentro da API
PUT - Edita alguma informação Dentro da API 

Por padrão DELETE e PUT não fazem request por html e necessitam de uma biblioteca
*
*
*/
// aqui todo código server.()necessita de parametros de entrada com endereço e funncion.
// Exemplo de módelo de funncion ('/', (req,res) => {});
// base essencial de uma api construida por node.
// DICA::construir uma estrutura de dados JSON usando req (Rer.query)

const express = require('express');
const Devcontroller = require('./controller/Devcontroller');
const Likecontroller = require('./controller/Likecontroller');
const Deslikecontroller = require('./controller/Deslikescontroller');
const routes = express.Router(); 

routes.get('/devs', Devcontroller.index);
routes.post('/devs', Devcontroller.store);
routes.post('/devs/:devId/likes',Likecontroller.store);
routes.post('/devs/:devId/deslikes',Deslikecontroller.store);
module.exports = routes;

// Add mongoose (ODM) atravez do yarn para trabalhar com .js sem ser necessario SQL
