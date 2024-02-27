/*********************************************************************************************
 * Objetivo: Arquivo reponsável por realizar validações, consistencias e regra de negócio
 * para os filmes.
 * Data: 30/01/2024.
 * Autor: Luana Magalhães 
 * Versão: 1.0
 **********************************************************************************************/

//Import do arquivo DAO para manipular dados dos filmes
const filmesDAO = require('../model/DAO/filme.js');
const message = require('../modulo/config.js');

//Função para inserir um novo filme
const setInserirNovoFilme = async function () {

}

//Função para atualizar um filme existente
const setAtualizarFilme = async function () {

}

//Função para deletar um filme existente
const setExcluirFilme = async function () {

}

//Função para listar todos os filmes existentes
const getListarFilmes = async function () {

    //Cria o objeto JSON 
    let filmesJSON = {};

    //Chama a função do DAO para retorar os dados do banco
    let dadosFilmes = await filmesDAO.selectAllFilmes();

    //Validação para criar JSON dos dados
    if (dadosFilmes) {
        if (dadosFilmes.length > 0) {
            //Cria JSON de retorno do dados
            filmesJSON.filme = dadosFilmes;
            filmesJSON.quantidade = dadosFilmes.length
            filmesJSON.status_code = 200;
            return filmesJSON
        } else{
            return message.ERROR_NOT_FOUND
        }

    } else {
        return message.ERROR_INTERNAL_SERVER_DB;
    }
}

//Função para retornar um filme a partir de um critério (ID) 
const getBuscarFilme = async function (id) {
    //Recebe o id encaminhado pelo app
    let idFilme = id;
    let filmeJSON = {};

    if (idFilme == '' || idFilme == undefined || isNaN(idFilme)) {
        return message.ERROR_INVALID_ID
    } else {
        //Encaminha o ID para o 
        let dadosFilme = await filmesDAO.selectByIdFilme(idFilme);

        //Validação para verificar se o DAO retornou dados
        if (dadosFilme) {
            if (dadosFilme.length > 0) {
                //Cria JSON de retorno do dados
                filmeJSON.filme = dadosFilme
                filmeJSON.status_code = 200;
                return filmeJSON
            } else{
                return message.ERROR_NOT_FOUND
            }

        } else {
            return message.ERROR_INTERNAL_SERVER_DB;
        }
    }
}

//Função para retornar um filme a partir de um critério (Nome) 
const getBuscarNomeFilme = async function (nome) {
    //Recebe o nome encaminhado pelo app
    let nomeFilme = nome;
    let filmeJSON = {};

    if (nomeFilme == '' || nomeFilme == undefined) {
        return message.ERROR_INVALID_QUERY
    } else {
        //Encaminha o NOME para o 
        let dadosFilme = await filmesDAO.selectByNameFilme(nomeFilme);

        //Validação para verificar se o DAO retornou dados
        if (dadosFilme) {
            if (dadosFilme.length > 0) {
                //Cria JSON de retorno do dados
                filmeJSON.filme = dadosFilme
                filmeJSON.status_code = 200;
                return filmeJSON
            } else{
                return message.ERROR_NOT_FOUND
            }

        } else {
            return message.ERROR_INTERNAL_SERVER_DB;
        }
    }
}

module.exports = {
    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme,
    getBuscarNomeFilme
}

