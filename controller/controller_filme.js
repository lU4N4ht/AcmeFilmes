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
const setInserirNovoFilme = async function (dadosFilme, contentType) {

    try {


        if (String(contentType).toLocaleLowerCase() == 'application/json') {

            let statusValidated = false;
            let novoFilmeJSON = {}

            if (dadosFilme.nome == '' || dadosFilme.nome == undefined || dadosFilme.nome == null || dadosFilme.nome.length > 80 ||
                dadosFilme.sinopse == '' || dadosFilme.sinopse == undefined || dadosFilme.sinopse == null || dadosFilme.sinopse.length > 65000 ||
                dadosFilme.duracao == '' || dadosFilme.duracao == undefined || dadosFilme.duracao == null || dadosFilme.duracao.length > 8 ||
                dadosFilme.data_lancamento == '' || dadosFilme.data_lancamento == undefined || dadosFilme.data_lancamento == null || dadosFilme.data_lancamento.length != 10 ||
                dadosFilme.foto_capa == '' || dadosFilme.foto_capa == undefined || dadosFilme.foto_capa == null || dadosFilme.foto_capa.length > 300 ||
                dadosFilme.valor_unitario.length > 8 || isNaN(dadosFilme.valor_unitario)
            ) {
                return message.ERROR_REQUIRED_FILDS;
            } else {
                //Validação para verificar se a data de relançamento tem um conteúdo válido
                if (dadosFilme.data_relancamento != '' && dadosFilme.data_relancamento != null && dadosFilme.data_relancamento != undefined) {

                    //Verifica a quantidade de caracteres
                    if (dadosFilme.data_relancamento.length != 10) {
                        return message.ERROR_REQUIRED_FILDS
                    } else {
                        statusValidated = true;
                    }
                } else {
                    statusValidated = true;
                }
            }

            if (statusValidated) {

                //Encaminha os dados para o DAO inserir
                let novoFilme = await filmesDAO.insertFilme(dadosFilme);

                let idFilmeCadastrado = await filmesDAO.selectIdFilme();

                if (novoFilme) {

                    //Cria o JSON de retorno com informações de requisição e os dados novos
                    novoFilmeJSON.status = message.SUCCESS_CREATED_ITEM;
                    novoFilmeJSON.status_code = message.SUCCESS_CREATED_ITEM.status_code;
                    novoFilmeJSON.message = message.SUCCESS_CREATED_ITEM.message;
                    novoFilmeJSON.filme = dadosFilme;
                    novoFilmeJSON.id = idFilmeCadastrado[0]['cast(id as decimal)'];

                    return novoFilmeJSON
                } else {
                    return message.ERROR_INTERNAL_SERVER_DB //500
                }
            }
        } else {

            return message.ERROR_CONTENT_TYPE; //Erro 415 - content type errado
        }
    } catch (error) {

        return message.ERROR_INTERNAL_SERVER
    }


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

    console.log(dadosFilmes)
    //Validação para criar JSON dos dados
    if (dadosFilmes) {
        if (dadosFilmes.length > 0) {
            //Cria JSON de retorno do dados
            filmesJSON.filme = dadosFilmes;
            filmesJSON.quantidade = dadosFilmes.length;
            filmesJSON.status_code = 200;
            return filmesJSON
        } else {
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
            } else {
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
            } else {
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

