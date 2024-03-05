/*************************************************************************************************
 * Objetivo: Arquivo responsável pelas variáveis globais do projeto, ondee havejam mensagens, 
 * status_code e outros conteúdos para o Projeto
 * Data: 20/02/2024
 * Autor: Luana
 * Versão: 1.0
 *************************************************************************************************/

/******************************** Mensagens de ERRO do Projeto ******************************************/

const ERROR_INVALID_ID = {status: false, status_code: 400, message:'O ID encaminhado na requisição não é válido!'}
const ERROR_INVALID_QUERY = {status: false, status_code: 400, message:'A query encaminhada na requisição não é válido!'}
const ERROR_NOT_FOUND = {status: false, status_code: 404, message:'Nenhum item encontrado na requisição!'}
const ERROR_INTERNAL_SERVER_DB = {status: false, status_code: 500, message:'Ocorreram erros no processamento do Banco de dados! Contate o administrador da API.'}
const ERROR_REQUIRED_FILDS = {status: false, status_code: 400, message:'Ocorreram erros no preenchimento de dados.'}




/*********************************************** MENSAGENS DE SUCESSO ************************************************ */
const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message:'Item criado com sucesso.'}

module.exports = {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB,
    ERROR_INVALID_QUERY,
    ERROR_REQUIRED_FILDS,
    SUCCESS_CREATED_ITEM
}