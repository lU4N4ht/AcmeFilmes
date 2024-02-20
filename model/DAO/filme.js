/*********************************************************************************************
 * Objetivo: Arquivo reponsável por realizar o CRUD no banco de dados MySQL
 * para os filmes.
 * Data: 30/01/2024.
 * Autor: Luana Magalhães 
 * Versão: 1.0
 **********************************************************************************************/

/*******************************************
 *  Select - Query
 *  Execute - insert, update e delete
 ******************************************/

//Import da biblioteca do Prisma Client
const { PrismaClient } = require('@prisma/client');

//Instanciando a classe do PrismaClient (criando um obj)
const prisma = new PrismaClient();


//Função para inserir um novo filme no banco de dados
const insertNovoFilme = async function () {

}

//Função para atualizar um filme existente no banco de dados
const updateFilme = async function () {

}

//Função para deletar um filme existente no banco de dados
const deleteFilme = async function () {

}


//Função para listar todos os filmes existentes no banco de dados
const selectAllFilmes = async function () {

    /************************************************************************
     *    $queryRawUnsafe(sql) - Encaminha uma variável
     *    $queryRaw('select * from tbl_filme') - Encaminha direto o script
     *************************************************************************/

    try {
        let sql = 'select * from tbl_filme'
        //rs = result (resultado do banco)
        //Executa o scriptSQL no BD e guarda o retorno dos dados
        let rsFilmes = await prisma.$queryRawUnsafe(sql);

        return rsFilmes;

    } catch (error) {
        return false
    }
}


//Função para retornar um filme a partir de um critério (ID) no banco de dados
const selectByIdFilme = async function (id) {

    try {
        //Pesquisar o filme por id
        let sql = `select * from tbl_filme where id = ${id}`;
        let rsFilme = await prisma.$queryRawUnsafe(sql);

        return rsFilme;

    } catch (error) {
        return false
    }

}

module.exports = {
    insertNovoFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}