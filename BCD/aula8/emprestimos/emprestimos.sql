drop database if exists emprestimos;

create database emprestimos charset = UTF8 collate utf8_general_ci;

use emprestimos;

create table clientes (
    cpf 
    integer not null primary key,
    pri_nome varchar(30) not null,
    sobrenome varchar(30) not null,
    cep varchar(30) not null,
    complemento varchar(30)
);

create table telefones(
    cpf integer not null,
    tipo varchar(20) not null,
    numero varchar(15) not null,
    foreign key (cpf) references clientes(cpf)
);

create table emprestimos(
    id integer auto_increment not null primary key,
    cpf integer not null,
    data date not null,
    capital varchar(10) not null,
    n_parcelas varchar(10) not null,
    valor varchar(10) not null,
    taxa_juros float(6, 2) not null,
    impostos varchar(10) not null,
    foreign key (cpf) references clientes(cpf)
);

create table parcelas(
    id integer not null auto_increment primary key,
    vencimento varchar(10) not null,
    pagamento varchar(10) not null,
    valor float(6, 2),
    val_recebido float(6, 2)
);

describe clientes;

describe telefones;

describe emprestimos;

describe parcelas;

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/senai/2DES/BCD/aula8/emprestimos/clientes.csv' 
INTO TABLE clientes 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/senai/2DES/BCD/aula8/emprestimos/telefones.csv' 
INTO TABLE telefones 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/senai/2DES/BCD/aula8/emprestimos/emprestimos.csv' 
INTO TABLE emprestimos 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\r\n' 
IGNORE 1 ROWS;

create trigger val after insert on emprestimos
for each ROW
insert into parcelas values(1,'30/04/2002','30/04/2002',1000,1000);



select * from parcelas;
