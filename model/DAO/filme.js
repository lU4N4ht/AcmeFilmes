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
const insertFilme = async function (dadosFilme) {

    try {

        let sql;

        //Vlidação para ver se a data de relançamento é vazia (null), já que a tratativa para o banco é diferente   [P R O V I S Ó R I O]
        if (dadosFilme.data_relancamento == null || dadosFilme.data_relancamento == undefined || dadosFilme.data_relancamento == ' ') {
            sql = `insert into tbl_filme(nome,
            sinopse,
            duracao,
            data_lancamento,
            data_relancamento,
            foto_capa,
            valor_unitario
            ) values (
               '${dadosFilme.nome}',                            
               '${dadosFilme.sinopse}',                            
               '${dadosFilme.duracao}',                            
               '${dadosFilme.data_lancamento}',                            
                null,                            
               '${dadosFilme.foto_capa}',                            
               '${dadosFilme.valor_unitario}'                            
                      )`
        } else {
            sql = `insert into tbl_filme(nome,
            sinopse,
            duracao,
            data_lancamento,
            data_relancamento,
            foto_capa,
            valor_unitario
            ) values (
               '${dadosFilme.nome}',                            
               '${dadosFilme.sinopse}',                            
               '${dadosFilme.duracao}',                            
               '${dadosFilme.data_lancamento}',                            
               '${dadosFilme.data_relancamento}',                            
               '${dadosFilme.foto_capa}',                            
               '${dadosFilme.valor_unitario}'                            
                      )`
        }


        //mudou de query para execute pq nao devolve valor
        let result = await prisma.$executeRawUnsafe(sql);

        if (result) {
            return true
        } else {
            return false
        }
    } catch(error){
        return false;
    }
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

//Função para retornar um filme a partir de um critério (Nome) no banco de dados
const selectByNameFilme = async function (nome) {

    try {
        //Pesquisar o filme por nome
        let sql = `select * from tbl_filme where nome like "%${nome}%"`;
        let rsFilme = await prisma.$queryRawUnsafe(sql);
        console.log(sql)

        return rsFilme;


    } catch (error) {
        return false
    }

}

module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme,
    selectByNameFilme
}