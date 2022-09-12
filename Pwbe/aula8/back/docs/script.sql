drop database if exists locadora;
create database locadora charset=UTF8 collate utf8_general_ci;
use locadora;

create table usuarios(
    codigo integer not null primary key auto_increment,
    nome varchar(50) not null,
    endereco varchar(100) not null,
    telefone varchar(15) not null
);

create table filmes(
    codigo integer not null primary key auto_increment,
    nome varchar(100) not null,
    genero varchar(100) not null
);

create table aluga(
    id integer not null primary key auto_increment,
    codigo_cli integer not null,
    codigo_filme integer not null,
    data_locacao varchar(10) not null, 
    data_devolucao varchar(10) not null,
    multa float(5,2) not null,
    foreign key (codigo_cli) references usuarios(codigo),
    foreign key (codigo_filme) references filmes(codigo)
);

describe usuarios;
describe filmes;
describe aluga;
show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/logic2/Back-end/aula8/back/src/clientes.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/logic2/Back-end/aula8/back/src/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/logic2/Back-end/aula8/back/src/locacoes.csv'
INTO TABLE aluga
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from usuarios;
select * from filmes;
select * from aluga;