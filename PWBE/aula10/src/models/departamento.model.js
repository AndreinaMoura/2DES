const create = (model) => {
    return `insert into departamentos values (${model.cod_depto},'${model.nome_depto}')`;
}

const del = (model) => {
    return `select * from departamentos where cod_depto = '${model.cod_depto}'`;
}

module.exports={
    create,
    del
}