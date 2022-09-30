drop database if exists solicitacoes;
create database solicitacoes charset=utf8 collate utf8_general_ci;
use solicitacoes;
-- SQL - DDL
Create table Funcionarios(
	Cod_Func numeric(4) not null,   
	Nome_Func varchar(50) not null,
	Sexo char(1) not null,            
	Cidade varchar(30),
	Estado varchar(2),
	constraint pk_func_1 primary key(Cod_Func)
);

Create table Departamentos(
	Cod_Depto numeric(4) not null,
	Nome_Depto varchar(50) not null,
	constraint pk_dep_1 primary key(Cod_Depto)
); 

Create table Produtos(
	Cod_Produto numeric(4) not null,  
	Nome_produto varchar(50) not null,
	constraint pk_prod_1 primary key(Cod_Produto)
);

Create table Solicitacoes(
	Num_Sol numeric(4) not null,     
	Data_sol date null,
	Cod_Depto numeric(4) not null,           
	Cod_Func  numeric(4) not null,
	constraint pk_sol_1 primary key(Num_Sol),
	constraint fk_sol_dep_1 Foreign Key(Cod_Depto) references Departamentos(Cod_Depto),
	constraint fk_sol_fun_1 Foreign Key(Cod_Func) references Funcionarios(Cod_Func)
);

Create table Itens_Solicitacao(
	Num_Sol numeric(4) not null,
	Cod_Produto numeric(4) not null,
	Qtde numeric(4) not null,
	Valor numeric(12,2) not null,
	constraint pk_itens_sol primary key(Num_Sol, cod_produto),
	constraint fk_itens_sol_1 foreign Key(Num_Sol) references Solicitacoes(Num_Sol),
	constraint fk_itens_prod_1 Foreign Key(Cod_Produto) references Produtos(Cod_Produto)
);

-- OBS Na tabela Itens_Solicitacao a chave primária é uma chave "COMPOSTA" por (Num_Sol, cod_produto)

-- SQL - DML
insert into Departamentos values
(1000,"Vendas"),
(2000,"Compras"),
(2001,"Recursos Humanos");
insert into Funcionarios values
(100,"Jose Pedro","M","Sumare","SP"),
(150,"Ana Pereira","F","Nova Odessa","SP"),
(200,"Maria da Silva","F","Londrina","PR"),
(300,"Joao Antonio","M","Campinas","SP");
insert into Produtos values
(125,"Parafuso"),
(135,"Arruela"),
(145,"Difusor"),
(155,"Paralama");
insert into Solicitacoes values
(1000,"2018/12/01",1000,100),
(1001,"2018/03/13",2001,200),
(1005,"2018/02/10",2001,150),
(1010,"2019/02/22",2000,100),
(1020,"2019/03/23",1000,200),
(1040,"2019/03/24",2001,300);
insert into Itens_Solicitacao values
(1000,125,2,4.36),
(1000,145,1,85),
(1001,135,3,2.12),
(1001,155,2,522),
(1010,145,2,170),
(1010,135,2,1.06),
(1020,125,1,2.18),
(1020,145,2,170),
(1040,155,3,783),
(1005,125,1,50),
(1005,145,3,54.5);
-- Coluna Valor representa o valor total do item (Não é necessário multiplicar pela quantidade)

-- SQL - DQL
select * from Departamentos;
select * from Funcionarios;
select * from Produtos;
select * from Solicitacoes;
select * from Itens_Solicitacao;
select max(valor) from Itens_Solicitacao;
Select Year(curdate()) as ano;
Select month(curdate()) as mes;
show tables;

describe Departamentos;
describe Funcionarios;
describe Produtos;
describe Solicitacoes;
describe Itens_Solicitacao;

create view vw_funcProd as
select s.Num_Sol, s.Data_sol, s.Cod_Depto, d.Nome_Depto , f.Cod_Func, f.Nome_Func, p.Cod_Produto, p.Nome_produto, it.Qtde, it.valor, (it.Qtde* it.valor)as "subtotal"
from Solicitacoes s 
inner join Departamentos d
on s.Cod_Depto=d.Cod_Depto
inner join Funcionarios f
on f.Cod_Func=s.Cod_Func 
inner join Itens_Solicitacao it
on s.Num_Sol=it.Num_Sol
inner join Produtos p
on it.Cod_Produto=p.Cod_Produto;

select * from vw_funcProd order by num_sol desc;

solicita_um_item(n_sol,depto,func,prod,qtd,total)

select Nome_produto from Produtos;
select (Num_Sol) from Solicitacoes where Cod_Depto = 1000 limit 1;
select (Num_Sol) from Solicitacoes where Cod_Depto = 1000;
Num_Sol -- 1000 --1020
select Cod_Produto from Itens_Solicitacao where Num_Sol = (select (Num_Sol) from Solicitacoes where Cod_Depto = 1000 limit 1) limit 1;
select Cod_Produto from Itens_Solicitacao order by (select Cod_Produto from Itens_Solicitacao where Num_Sol = (select (Num_Sol) from Solicitacoes where Cod_Depto = 1000 limit 1));
select Nome_produto from Produtos where cod_produto like (select Cod_Produto from Itens_Solicitacao where Num_Sol = (select (Num_Sol) from Solicitacoes where Cod_Depto = 1000 limit 1));
select Nome_produto from Produtos where cod_produto = 145;

select Nome_Func from Funcionarios;

select Nome_Depto from Departamentos;
select Cod_Produto from Produtos where Nome_produto = "Parafuso";
select Cod_Produto from Produtos where Nome_produto = "Disfusor";
select * from Solicitacoes;
select Num_Sol from Solicitacoes where Data_sol like "%2018-02%";
select Nome_produto from Produtos where Cod_Depto =(select Cod_Depto from Solicitacoes where Data_sol like "%2018-02%");
select Cod_Produto from Itens_Solicitacao where Num_Sol = (select Num_Sol from Solicitacoes where Data_sol like "%2018-02%");
select Nome_produto from Produtos where Cod_produto = (select Cod_Produto from Itens_Solicitacao where Num_Sol = (select Num_Sol from Solicitacoes where Data_sol like "%2018-02%") limit 2);
select p.Nome_produto, it.Num_Sol,it.Cod_Produto where Num_Sol = (select Num_Sol from Solicitacoes where Data_sol like "%2018-02%")
from Produtos p
inner join Itens_Solicitacao it
on it.Cod_Produto=p.Cod_produto
on it.Num_Sol=(select Num_Sol from Solicitacoes where Data_sol like "%2018-02%");



select f.Nome_Func, (it.Qtde* it.valor)as "total"
from Solicitacoes s 
inner join Funcionarios f
on f.Cod_Func=s.Cod_Func 
inner join Itens_Solicitacao it
on s.Num_Sol=it.Num_Sol;





CREATE PROCEDURE procedure_name
 ([
   [ IN | OUT | IN OUT ] parameter_name
  { parameter_type | ARRAY OF parameter_type }, ...
])
[ DECLARE variable_declaration;...[;] ]
BEGIN
 procedure_body_statement;...[;]
END