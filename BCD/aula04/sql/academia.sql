drop database if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;

create table telefones(
    id_aluno integer not null,
    numero varchar(100) not null
);

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table exercicios(
    id_exercicio integer not null primary key auto_increment,
    descricao varchar(50) not null,
    grupo_muscular varchar(20) not null,
    id_aparelho integer not null
);

create table aparelhos(
    id_aparelho	integer not null primary key auto_increment,
    nome varchar(50) not null
);

create table fichas(
    id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana varchar(20) not null,
    série varchar(40) not null
);

alter table telefones add foreign key (id_aluno) references alunos(id_aluno);
alter table exercicios add foreign key (id_aparelho) references aparelhos(id_aparelho);
alter table fichas add foreign key (id_aluno) references alunos(id_aluno);
alter table fichas add foreign key (id_exercicio) references exercicios(id_exercicio);

describe alunos;
describe telefones;
describe aparelhos;
describe exercicios;
describe fichas;

show tables;

insert into alunos values(1,"Marcos de Souza Castro","2002-05-22","M",65);
insert into alunos values(2,"Ana Oliveira Oliveira","1990-08-23","T",88);
insert into alunos values(3,"Lúcia da Silva de Souza","1988-06-14","F",45.5);
insert into alunos values(4,"Ana de Souza de Oliveira","2000-07-13","M",65.5);


insert into telefones values(1,"(11)04023-4384");
insert into telefones values(1,"(19)03086-1102");
insert into telefones values(2,"(14)3288-8530");
insert into telefones values(3,"(21)74746-1126");
insert into telefones values(3,"(19)28260-0126");
insert into telefones values(4,"(14)64505-3435");


select * from alunos;
select * from telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/logic2/Bcd/aula4/sql/csvAcademia/aparelhos.csv'
INTO TABLE aparelhos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/logic2/Bcd/aula4/sql/csvAcademia/exercicio.csv'
INTO TABLE exercicios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/logic2/Bcd/aula4/sql/csvAcademia/fichaExerc.csv'
INTO TABLE fichas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

