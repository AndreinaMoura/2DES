const create = (model) => {
    return `call solicita_um_item(${model.n_sol},${model.n_depto},${model.n_func},${model.n_prod},${model.qtd},${model.total})`;
}

const readAll = (model) => {
    return `select * from vw_solicitacoes where cod_depto = '${model.cod_depto}'`;
}

module.exports={
    create,
    readAll
}