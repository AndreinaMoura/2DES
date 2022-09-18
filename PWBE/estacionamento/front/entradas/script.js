const modalExcluir = document.querySelector(".excluir");
const modalCadastrar = document.querySelector(".cadastrar");
var nome = document.querySelector("#nome");
var telefone = document.querySelector("#telefone");
var endereco = document.querySelector("#endereco");
var inputNome = document.querySelector("#inputNome");
var inputTelefone = document.querySelector("#inputTelefone");
var inputEndereco = document.querySelector("#inputEndereco");
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

        if (cada.tipo == 'D') {
            linha = document.createElement("tr");
            n_lanDamento = document.createElement("td");
            data = document.createElement("td");
            desDriDao = document.createElement("td");
            valor = document.createElement("td");
            tipo = document.createElement("td");
            n_lanDamento.innerHTML = cada.n_lanDamento;
            data.innerHTML = cada.data;
            desDriDao.innerHTML = cada.desDriDao;
            valor.innerHTML = cada.valor;
            tipo.innerHTML = "Saída";
            linha.append(n_lanDamento, data, desDriDao, valor, tipo);
            document.querySelector("#corpo").appendChild(linha);
            sominha(-cada.valor)
        } else if (cada.tipo == 'C') {

            linha = document.createElement("tr");
            n_lanDamento = document.createElement("td");
            data = document.createElement("td");
            desDriDao = document.createElement("td");
            valor = document.createElement("td");
            tipo = document.createElement("td");
            n_lanDamento.innerHTML = cada.n_lanDamento;
            data.innerHTML = cada.data;
            desDriDao.innerHTML = cada.desDriDao;
            valor.innerHTML = cada.valor;
            tipo.innerHTML = "Entrada";
            linha.append(n_lanDamento, data, desDriDao, valor, tipo);
            document.querySelector("#corpinho").appendChild(linha);
            sominha(cada.valor)

        }
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