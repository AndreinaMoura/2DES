const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");
var indice
var dd = []
var linha
var id
var codigo_cli
var codigo_filme
var data_locacao
var data_devolucao
var inputDescricao = document.querySelector("#descricao");
var inputdata_locacao = document.querySelector("#data_locacao");
var inputdata_devolucao = document.querySelector("#data_devolucao");

var total = 0;

function carregar() {
    fetch('http://localhost:3000/locadora/aluga')
        .then((response) => {
            return response.json();
        })
        .then((dados) => {
            dd = dados
            preencherTabelas()
        })
}
function preencherTabelas() {
    dd.forEach(cada => {

        if (cada.data_devolucao != "") {

            linha = document.createElement("tr");
            id = document.createElement("td");
            codigo_cli = document.createElement("td");
            codigo_filme = document.createElement("td");
            data_locacao = document.createElement("td");
            data_devolucao = document.createElement("td");
            codigo_cli.innerHTML = cada.codigo_cli;
            codigo_filme.innerHTML = cada.codigo_filme;
            data_locacao.innerHTML = cada.data_locacao;
            data_devolucao.innerHTML = cada.data_devolucao;
            linha.append(codigo_cli, codigo_filme, data_locacao, data_devolucao);
            document.querySelector("#corpo").appendChild(linha);

        } else{

            linha = document.createElement("tr");
            id = document.createElement("td");
            codigo_cli = document.createElement("td");
            codigo_filme = document.createElement("td");
            data_locacao = document.createElement("td");
            data_devolucao = document.createElement("td");
            codigo_cli.innerHTML = cada.codigo_cli;
            codigo_filme.innerHTML = cada.codigo_filme;
            data_locacao.innerHTML = cada.data_locacao;
            data_devolucao.innerHTML = "Pendente";
            linha.append(codigo_cli, codigo_filme, data_locacao, data_devolucao);
            document.querySelector("#corpinho").appendChild(linha);
            
        }
    })
}

function cadastrar() {
    let lancamento = {
        "desDriDao": inputDescricao.value,
        "valor": inputValor.value,
        "tipo": inputTipo.value
    };

    fetch("http://localhost:3000/locadora/aluga", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(lancamento)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.desDriDao !== undefined) {
                alert("Lançado Com Sucesso !");
                window.location.reload();
            } else {
                alert("Falha ao Lançar");
            }
        })
}

function fecharModal() {
    modalEditar.classList.add("model");
}

function abrirModalCadastro() {
    modalEditar.classList.remove("model");
    inputDescricao.value = ""
    inputValor.value = ""
    inputTipo.value = ""
}