create view vw_produtos_depto as
select p.cod_produto, p.nome_produto, d.nome_depto from produto p 
left join itens_solicitacao i on p.cod_produto = i.cod_produto
inner join solicitacoes s on s.num_sol = i.num_sol
inner join departamentos d on d.cod_depto = d.cod_depto
group by p.cod_produto;

select * from vw_produtos_depto;

select nome_func, sum(valor) as 'Total_sol' from vw_solicitacoes group by nome_func;