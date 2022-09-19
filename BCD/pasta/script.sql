-- comentário
-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists pedidos;

create database pedidos charset = UTF8 collate utf8_general_ci;

use pedidos;

-- DDL Criação da estrutura do Banco de Dados
create table clientes(
    -- cpf varchar(11) not null primary key
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);

create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table pedidos(
    num_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    -- timestap(data e hora) e date(dia)
    valor decimal(8, 2),
    -- maior numero 999999,99
    descricao varchar(50) not null,
    quantidade integer(4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;

describe telefones;

describe pedidos;

show tables;

-- DML ALimentar o Banco de Dados com dados de teste
-- na mesma ordem não precisa acrescentar
-- insert into clientes(pri_nome, sobrenome, endereco) values 
insert into
    clientes
values
    (
        null,
        "Vanessa",
        "Silva",
        "Rua Amancio Bueno - Jaguariúna - SP"
    ),
    (
        null,
        "Marcelo",
        "Souza",
        "Rua Dois - Pedreira - SP"
    ),
    (
        null,
        "Juliana",
        "Tavares",
        "Rua Bueno Bueno - Jaguariúna - SP"
    );

select
    *
from
    clientes;

insert into
    telefones
values
    (1, "19 92913666"),
    (1, "19 92913666"),
    (2, "19 92123642"),
    (3, "19 92914789"),
    (3, "19 92953686"),
    (4, "19 92173682");

select
    *
from
    telefones;

insert into
    pedidos
values
    (null, 1, null, 10, "Pastel de flango", 2),
    (null, 3, null, 10, "Pastel de caine", 2),
    (null, 4, null, 10, "Pastel de calango", 2),
    (null, 3, null, 10, "Suco de laranja", 2),
    (null, 2, null, 10, "Cachaça", 2);

select
    *
from
    pedidos;