/*********************************************************************************************
 * Objetivo: Arquivo reponsável por realizar validações, consistencias e regra de negócio
 * para os filmes.
 * Data: 30/01/2024.
 * Autor: Luana Magalhães 
 * Versão: 1.0
 **********************************************************************************************/

//Import do arquivo DAO para manipular dados dos filmes
const filmesDAO = require('../model/DAO/filme.js');

//Função para inserir um novo filme
const setInserirNovoFilme = async function(){

}

//Função para atualizar um filme existente
const setAtualizarFilme = async function(){

}

//Função para deletar um filme existente
const setExcluirFilme = async function(){

}

//Função para listar todos os filmes existentes
const getListarFilmes = async function(){

    //Cria o objeto JSON 
    let filmesJSON = {};

    //Chama a função do DAO para retorar os dados do banco
    let dadosFilmes = await filmesDAO.selectAllFilmes();

    //Validação para criar JSON dos dados
    if(dadosFilmes){
        //Cria JSON de retorno do dados
        filmesJSON.filmes = dadosFilmes
        filmesJSON.quantidade = dadosFilmes.length
        filmesJSON.status_code = 200;
    } else{
        return false;
    }
}

//Função para retornar um filme a partir de um critério (ID) 
const getBuscarFilme = async function(){

}

module.exports = {
    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme
}