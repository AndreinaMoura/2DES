const create = (model) => {
    return `insert into produtos values (${model.cod_produtos},'${model.nome_produto}')`;
}

const readAll = () => {
    return `select * from produtos`;
}

module.exports={
    create,
    readAll
}