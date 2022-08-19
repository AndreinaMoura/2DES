-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists duplicatas;
create database duplicatas charset=UTF8 collate utf8_general_ci;
use duplicatas;
-- DDL Criação da estrutura do Banco de dados
create table clientes(
    cod_cliente integer not null primary key auto_increment,
    nome varchar(20) not null,
    rua_num varchar(10) not null,
    bairro varchar(20) not null,
    cidade varchar(20) not null,
    uf varchar(20) not null
);

create table telefones(
    tipo varchar(10) not null,
    numero varchar(100) not null,
    cod_cliente integer not null,
    foreign key (cod_cliente) references clientes(cod_cliente)
);

create table duplicatas(
    num_duplicata integer not null primary key auto_increment,
    valor varchar(20) not null,
    diferenca varchar(20) not null,
    data_compra varchar(20) not null,
    pagamento varchar(20) not null,
    vencimento varchar(20) not null,
    cod_cliente integer not null,
    foreign key (cod_cliente) references clientes(cod_cliente)
);

describe clientes;
describe telefones;
describe duplicatas;
show tables;