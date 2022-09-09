const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");
var indice
var dd = []
var linha
var codigo
var nome
var endereco
var telefone
var inputDescricao = document.querySelector("#descricao");
var inputendereco = document.querySelector("#endereco");
var inputtelefone = document.querySelector("#telefone");

function carregar() {
    fetch('http://localhost:3000/locadora/usuarios')
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
            linha = document.createElement("tr");
            codigo = document.createElement("td");
            nome = document.createElement("td");
            endereco = document.createElement("td");
            telefone = document.createElement("td");
            codigo.innerHTML = cada.codigo;
            nome.innerHTML = cada.nome;
            endereco.innerHTML = cada.endereco;
            telefone.innerHTML = cada.telefone;
            linha.append(codigo, nome, endereco, telefone);
            document.querySelector("#corpo").appendChild(linha);
    })
}

function cadastrar() {
    let lancamento = {
        "desDriDao": inputDescricao.value,
        "valor": inputValor.value,
        "tipo": inputTipo.value
    };

    fetch("http://localhost:3000/locadora/usuarios", {
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
