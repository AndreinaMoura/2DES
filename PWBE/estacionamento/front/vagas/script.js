const modalExcluir = document.querySelector(".excluir");
const modalCadastrar = document.querySelector(".cadastrar");
var corpo = document.querySelector("#corpo")
var nome = document.querySelector("#nome");
var telefone = document.querySelector("#telefone");
var endereco = document.querySelector("#endereco");
var inputNome = document.querySelector("#inputNome");
var inputTelefone = document.querySelector("#inputTelefone");
var inputEndereco = document.querySelector("#inputEndereco");
var dd = []
function carregar() {
    fetch('http://localhost:5000/estacionamento/vagas')
        .then((response) => {
            return response.json();
        })
        .then((dados) => {
            dd = dados
            preencherDiv()
        })
}
function preencherDiv() {
    dd.forEach(cada => {
        var linha = document.querySelector(".linha").cloneNode(true)
        var id = document.querySelector("id_vaga").innerHTML = cada.id;
        var disponivel
        if (cada.disponivel) {
           disponivel = document.querySelector(".vaga").style = "background-color: #2fd659"
        } else {
           disponivel = document.querySelector(".vaga").style = "background-color: #fa2828"
        }
        linha.append(id, disponivel);
        corpo.appendChild(linha);
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
            if (resp.desDriDao !== undefined) {
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