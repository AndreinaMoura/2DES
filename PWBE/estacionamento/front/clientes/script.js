const modalExcluir = document.querySelector(".excluir");
const modalCadastrar = document.querySelector(".cadastrar");
var linha
var nome = document.querySelector("#nome");
var telefone = document.querySelector("#telefone");
var endereco = document.querySelector("#endereco");
var inputNome = document.querySelector("#inputNome");
var inputTelefone = document.querySelector("#inputTelefone");
var inputEndereco = document.querySelector("#inputEndereco");
var dd = []
function carregar() {
    fetch('http://localhost:5000/estacionamento/clientes')
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
        linha = document.createElement('tr') 
        nome = document.createElement('td')
        endereco = document.createElement('td')
        telefone = document.createElement('td')
        nome.innerHTML = cada.nome;
        endereco.innerHTML = cada.endereco;
        telefone.innerHTML = cada.telefone;
        linha.append(nome, endereco, telefone);
        document.querySelector("#corpo").appendChild(linha);
    })
}

function cadastrar() {
    let clientes = {
        "nome": inputNome.value,
        "telefone": inputTelefone.value,
        "endereco": inputEndereco.value
    };

    fetch("http://localhost:5000/estacionamento/clientes", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(clientes)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.nome !== undefined) {
                alert("Lançado Com Sucesso !");
                window.location.reload();
            } else {
                alert("Falha ao Lançar");
            }
        })
}

function fecharModal() {
    modalCadastrar.classList.add("model");
}

function abrirModalCadastro() {
    modalCadastrar.classList.remove("model");
    inputNome.value = ""
    inputTelefone.value = ""
    inputEndereco.value = ""
}