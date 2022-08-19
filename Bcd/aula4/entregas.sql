drop database if exists entregas;

create database entregas charset = UTF8 collate utf8_general_ci;

use entregas;

create table clientes(
    id_clientes int not null auto_increment primary key,
    cpf varchar(12) not null,
    nome varchar(25) not null,
    cep varchar(25) not null,
    numero varchar(25) not null,
    complete varchar(50) not null
);

create table telefones(
    id_clientes int not null auto_increment primary key,
    telefones varchar(50) not null
);

create table pedidos(
    id_pedidos int not null auto_increment primary key,
    datas varchar(50) not null,
    hora_pedido varchar(50) not null,
    hora_entrega varchar(20) not null,
    hora_fim varchar(20) not null,
    id_clientes int not null,
    foreign key (id_clientes) references clientes(id_clientes)
);

create table entrega(
    taxa_entrega integer not null,
    id_pedidos int not null,
    foreign key (id_pedidos) references pedidos(id_pedidos)
);

create table entregadores(
    veiculo varchar(20) not null,
    nome varchar(20) not null,
    id_entregador varchar(20) not null,
    id_pedidos int not null,
    foreign key (id_pedidos) references pedidos(id_pedidos)
);

create table itens(
    quantidade int not null auto_increment primary key,
    id_pedidos int not null,
    foreign key (id_pedidos) references pedidos(id_pedidos)
);

create table produtos(
    id_produto integer not null primary key auto_increment,
    nome varchar(20) not null,
    id_pedidos int not null,
    preco integer(20) not null,
    foreign key (id_pedidos) references pedidos(id_pedidos)
);

describe clientes;
describe telefones;
describe pedidos;
describe entregadores;
describe itens;
describe produtos;
show tables;

select * from clientes;
select * from clientes where id = 3;
select * from clientes where nome like "Ana%";
select * from clientes where nome like "%Oliveira%";
select * from clientes where peso < 90 AND nome like "%Oliveira%";
select * from clientes where peso > 90 AND nome like "%Oliveira%";