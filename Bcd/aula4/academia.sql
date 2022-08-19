-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;
-- DDL Criação da estrutura do Banco de dados
create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(20) not null,
    nascimento varchar(20) not null,
    sexo varchar(10) not null,
    peso varchar(10) not null
);
create table telefones(
    telefones varchar(100) not null,
    id_aluno integer not null,
    foreign key (id_aluno) references alunos(id_aluno)
);
create table exercicios(
    id_exercicio integer not null primary key auto_increment,
    descricao varchar(20) not null,
    grupo_muscular varchar(20) not null
);

create table aparelho(
    id_aparelho integer not null primary key auto_increment,
    nome varchar(20) not null
);

create table ficha(
    dia_semana varchar(20) not null,
    serie varchar(20) not null,
    id_aluno integer not null,
    id_exercicio integer not null,
    foreign key (id_aluno) references alunos(id_aluno),
    foreign key (id_exercicio) references exercicios(id_exercicio)
);

describe alunos;
describe exercicios;
describe aparelho;
describe ficha;
describe telefones;
show tables;