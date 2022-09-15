//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nível 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;
var novo = [
	{
		"funcionario": "Sancho Cedraz",
		"cargo": {
			"nome": "Analista",
			"nivel": 2
		},
		"autorizado": true
	},
	{
		"funcionario": "Ionara Pederneiras",
		"cargo": {
			"nome": "Técnico",
			"nivel": 2
		},
		"autorizado": true
	},
	{
		"funcionario": "Filipe Castanho",
		"cargo": {
			"nome": "Desenvolvedor",
			"nivel": 1
		},
		"autorizado": false
	},
	{
		"funcionario": "Lívia Bicalho",
		"cargo": {
			"nome": "Analista",
			"nivel": 3
		},
		"autorizado": true
	},
	{
		"funcionario": "Mauro Varanda",
		"cargo": {
			"nome": "Desenvolvedor",
			"nivel": 3
		},
		"autorizado": false
	},
	{
		"funcionario": "Sandro Rosário",
		"cargo": {
			"nome": "Técnico",
			"nivel": 3
		},
		"autorizado": true
	}
];

var itemCarrinho = document.querySelector(".novo-funcionario");

function carregar() {
	novo.forEach(item => {
		let novoItem = itemCarrinho.cloneNode(true);

		novoItem.classList.remove("modelo");

		novoItem.querySelector("#funcionario-item").innerHTML = item.funcionario;
		novoItem.querySelector("#cargo-item").innerHTML = item.cargo.nome;
		novoItem.querySelector("#nivel-item").innerHTML = item.cargo.nivel;
		novoItem.querySelector("#autorizado").innerHTML = item.autorizado;

		if ((item.funcionario =='Ionara Pederneiras') || (item.funcionario == 'Lívia Bicalho')) {
			novoItem.querySelector("#image").src = "img/coroa.png";
		}else{
			novoItem.querySelector("#image").src = "img/cara.png";
		}
		if ((item.autorizado)) {
			novoItem.querySelector("#autorizado").style = "color: green";
			novoItem.querySelector("#autorizado").innerHTML = "Autorizado";
			novoItem.querySelector("#b").style = "display: none";
			
		} else {
			novoItem.querySelector("#autorizado").style = "color: red";
			novoItem.querySelector("#autorizado").innerHTML = "Nâo Autorizado";
			novoItem.querySelector("#imagenzinha").style = "display: none";
		}
		document.querySelector(".funcionario").appendChild(novoItem);
	});
}

function removerItem(e) {
	e.parentNode.remove();
}
