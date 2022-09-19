drop database if exists livrocaixa;
create database livrocaixa charset=UTF8 collate utf8_general_ci;
use livrocaixa;

create table lancamentos(
    n_lanDamento integer not null primary key auto_increment,
    data varchar(10) not null,
    desDriDao varchar(100) not null,
    valor float(5,2) not null, 
    tipo varchar(1) not null
);

describe lancamentos;
show tables;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/logic2/Back-end/aula7/back/src/lancamentos.csv'
LOAD DATA INFILE 'C:/Users/Andreina/Documents/GitHub/logic2/Back-end/aula7/back/src/lancamentos.csv'
INTO TABLE lancamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from lancamentos;