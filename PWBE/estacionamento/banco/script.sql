drop database if exists estacionamento;
create database estacionamento charset=UTF8 collate utf8_general_ci;
use estacionamento;
create table clientes(
    id integer not null primary key auto_increment,
    nome varchar(80) not null,
    telefone varchar(15) not null,
    endereco varchar(100) not null
);

CREATE TABLE veiculos(
    placa varchar(9) not null PRIMARY KEY,
    modelo varchar(30) not null,
    cor varchar(10) not null,
    tipo varchar(10) not null
);

CREATE TABLE vagas(
    id varchar(3) not null PRIMARY KEY,
    disponivel boolean NOT NULL
);

CREATE TABLE entradas(
    id_cliente integer not null,
    placa varchar(9) not null,
    id_vaga varchar(3) not null,
    data_entrada DATETIME not null,
    data_saida DATETIME,
    valor float(5,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (placa) REFERENCES veiculos(placa),
    FOREIGN KEY (id_vaga) REFERENCES vagas(id)
); 

CREATE VIEW vw_entradas as
SELECT c.nome as nome_cli, v.placa as placa, v.modelo as modelo, v.cor as cor, v.tipo as tipo, vg.id as vaga, e.data_entrada as data_entrada, e.data_saida as data_saida, e.valor as valor
FROM entradas e
INNER JOIN clientes c
ON e.id_cliente = c.id
INNER JOIN veiculos v
on e.placa = v.placa
INNER JOIN vagas vg
on e.id_vaga = vg.id;