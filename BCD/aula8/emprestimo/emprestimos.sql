drop database if exists emprestimos;

create database emprestimos charset = UTF8 collate utf8_general_ci;

use emprestimos;

create table clientes (
    cpf integer not null primary key,
    pri_nome varchar(30) not null,
    sobrenome varchar(30) not null,
    cep varchar(30) not null,
    complemento varchar(30)
);

create table telefone(
    cpf integer not null,
    tipo varchar(20) not null,
    numero varchar(15) not null,
    foreign key (cpf) references clientes(cpf) on delete cascade
);

create table emprestimos(
    id integer auto_increment not null primary key,
    data datetime not null,
    capital decimal(6, 2) not null,
    valor decimal(6, 2) not null,
    n_parcelas varchar(5) not null,
    impostos decimal(6, 2) not null,
    taxa_juros decimal(6, 2) not null -- montatante decimal(6, 2) not null,
);

create table parcelas(
    id integer not null auto_increment primary key,
    vencimento varchar(10) not null,
    pagamento varchar(10) not null,
    valor decimal(6, 2) val_recebido decimal(6, 2) -- diferenca decimal(4, 2)
);

describe clientes;

describe telefones;

describe emprestimos;

describe parcelas;

show tables;

LOAD DATA INFILE ''