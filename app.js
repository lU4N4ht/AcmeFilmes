/*********************************************************************************************************************************************************
 * Objetivo: Criar uma API para responder dados da pizzaria
 * Data: 10/12/2023
 * Autor: Luana
 * Versão: 1.0
 ********************************************************************************************************************************************************/

/***************************
 * Instalações para a API
 *  npm install [] --save
 *  express - Dependencia do node para auxiliar na criação de API
 *  cors - Dependencia do node para manipular recursos de acesso, permissões, etc da API (HEADER)
 *  body-parser - Dependencia do node para auxiliar na chegada de dados na API (BODY)
 * 
 * Quatro métodos:
 * Get - Pegar dados;
 * Post - Envia dados novos;
 * Put - Altera dados existentes;
 * Delete - Apaga dados existentes;
 ***************************/

//Importando as bibliotecas instaladas para o projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request } = require('http');


//Instanciando o express (cria um objeto "app" tendo referencia a classe do express)
const app = express();

//Função para configurar as permissões do cors
app.use((request, response, next) => {
    //Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')
    //Libera/Configura os métodos que poderão ser usados na API
    response.header('Access-Control-Allow-Methods', 'Get')
    
    app.use(cors());

    //Faz com que ele de sequência, indo pra próxima função
    next();

})

//EndPoint: Listar todos os filmes;
app.get('/v1/AcmeFilmes/ListarFilmes', cors(), async function(request, response, next){
    let controleListaFilmes = require('./controller/function.js')
    let filmes = controleListaFilmes.getListaDeFilmes();
    response.json(filmes);
    response.status(200);
});

//Endpoint: Listar os filmes e suas informações com base em um critério(id)
app.get('/v1/AcmeFilmes/ListarFilme', cors(), async function(request, response, next){
    let id = request.query.id
    let controleListaFilmes = require('./controller/function.js')
    let filmes = controleListaFilmes.getFilme(id);

    if(filmes){
        response.json(filmes);
        response.status(200);
    } else{
        response.status(404)
        response.json({erro:'Não foi possível encontrar um item.'})
    }
});

//Executando a API e fazendo ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições.')
});