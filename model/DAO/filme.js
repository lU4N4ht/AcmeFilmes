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
const{PrismaClient} = require('@prisma/client');

//Instanciando a classe do PrismaClient (criando um obj)
const prisma = new PrismaClient();


//Função para inserir um novo filme no banco de dados
const insertNovoFilme = async function(){

}

//Função para atualizar um filme existente no banco de dados
const updateFilme = async function(){

}

//Função para deletar um filme existente no banco de dados
const deleteFilme = async function(){

}


//Função para listar todos os filmes existentes no banco de dados
const selectAllFilmes = async function(){

    let sql = 'select * from tbl_filme'

    /************************************************************************
     *    $queryRawUnsafe(sql) - Encaminha uma variável
     *    $queryRaw('select * from tbl_filme') - Encaminha direto o script
     *************************************************************************/


    //rs = result (resultado do banco)
    //Executa o scriptSQL no BD e guarda o retorno dos dados
   let rsFilmes = await prisma.$queryRawUnsafe(sql);

   //Validação para retornar os dados ou retornar false
   if(rsFilmes.length > 0){
    return rsFilmes;
   } else{
    return false;
   }
}


//Função para retornar um filme a partir de um critério (ID) no banco de dados
const selectByIdFilme = async function(){

}

module.exports = {
    insertNovoFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}