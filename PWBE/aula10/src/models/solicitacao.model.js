const create = (model) => {
    return `call solicita_um_item(${model.n_sol},${model.n_depto},${model.n_func},${model.n_prod},${model.qtd},${model.total})`;
}

const readAll = () => {
    return `select * from vw_solicitacoes`;
}

const readProdutos = (mes) => {
    return `select * from vw_solicitacoes where data_sol like '_____${mes}___'`;
}

const readTotSolFunc = () => {
    return `select Nome_Func, sum(valor) as 'Total_sol', count(valor) as 'Qtd_sol' from vw_solicitacoes group by nome_func;`;
}

module.exports={
    create,
    readAll,
    readProdutos,
    readTotSolFunc
}