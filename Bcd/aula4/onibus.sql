-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists onibus;
create database onibus charset=UTF8 collate utf8_general_ci;
use onibus;
-- DDL Criação da estrutura do Banco de dados
create table motoristas(
    cpf integer not null primary key auto_increment,
    nome varchar(20) not null,
    telefones varchar(100) not null
);

create table dirige(
    id_exercicio integer not null primary key auto_increment,
    data varchar(20) not null
);

create table linhas(
    id_linha integer not null primary key auto_increment,
    nome varchar(20) not null
);

describe motoristas;
describe dirige;
describe linhas;
show tables;