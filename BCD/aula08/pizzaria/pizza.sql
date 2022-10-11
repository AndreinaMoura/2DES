drop database if exists pizzaria;
create database pizzaria charset=UTF8 collate utf8_general_ci;
use pizzaria;

create table cliente (
    cliente_id integer auto_increment not null primary key,
    telefone varchar(30) not null,
    nome varchar(30) not null,
    logradouro varchar(20) not null,
    numero decimal(5,0) not null,
    complemento varchar(30),
    bairro varchar(30),
    referencia varchar(30) not null
);

create table pedido(
    pedido_id integer auto_increment not null primary key,
    cliente_id integer not null,
    data datetime not null,
    valor decimal(5,2) not null,

    foreign key (cliente_id) references cliente(cliente_id)
);

create table pizza(
    pizza_id integer not null auto_increment primary key,
    nomePizza varchar(30) not null,
    descricao varchar(30) not null,
    valor decimal(4,2)
);

create table item_pedido(
    pedido_id integer auto_increment not null primary key,
    pizza_id integer not null,
    quantidade decimal(2,0) not null,
    valor decimal(5,2) not null,

    foreign key (pedido_id) references pedido(pedido_id),
    foreign key (pizza_id) references pizza(pizza_id)
);

describe cliente;
describe pedido;
describe pizza;
describe item_pedido;

show tables;


LOAD DATA INFILE ''


