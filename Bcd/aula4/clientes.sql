-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists clientes;
create database clientes charset=UTF8 collate utf8_general_ci;
use clientes;
-- DDL Criação da estrutura do Banco de dados
create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(20) not null,
    nascimento varchar(20) not null,
    sexo varchar(10) not null,
    peso varchar(10) not null
);

create table telefones(
    telefones varchar(100) not null,
    id_cliente integer not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
show tables;