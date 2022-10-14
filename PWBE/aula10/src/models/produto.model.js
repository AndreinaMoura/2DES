const create = (model) => {
    return `insert into produtos values (${model.cod_produtos},'${model.nome_produto}')`;
}

const readAll = () => {
    return `select * from produtos`;
}

const readNome = (model) => {
    return `select * from vw_produtos_depto where nome_produto like '%${model.nome_produto}%'`;
}

module.exports={
    create,
    readAll,
    readNome
}