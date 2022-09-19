const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");
var indice = 1;
var linha
var n_lanDamento
var data
var desDriDao
var valor
var tipo
var inputDescricao = document.querySelector("#descricao");
var inputValor = document.querySelector("#valor");
var inputTipo = document.querySelector("#tipo");
<<<<<<< HEAD:Back-end/aula7/front/script.js
var selecionado = document.querySelector('#slcData') //select
var selectedData = document.querySelector('#op') //option

var selctOptions = [];

=======
var selctOptions = []
>>>>>>> 5c71b19c2e4e9586ca6d4f06829d20cbae247afe:Pwbe/aula7/front/script.js
var total = 0;

function carregar() {
    fetch('http://localhost:3000/livrocaixa/lancamentos')
        .then((response) => {
            return response.json();
        })
        .then((dados) => {
<<<<<<< HEAD:Back-end/aula7/front/script.js
            preencherTabelas(dados)
            datas()
        })
}
function preencherTabelas(dados) {
    selctOptions[0] = dados[0].data;
    dados.forEach(cada => {
=======
            dd = dados
            preencherTabelas()
            // opicoes()
            datas()
        })
}
function preencherTabelas() {
    selctOptions[0] = dd[0].data;
    let i = 1;
    dd.forEach(cada => {
>>>>>>> 5c71b19c2e4e9586ca6d4f06829d20cbae247afe:Pwbe/aula7/front/script.js

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
            valor.innerHTML = cada.valor.toLocaleString('pt-br', {style: 'currency', currency:'brl'});
            tipo.innerHTML = "Saída";
            linha.append(n_lanDamento, data, desDriDao, valor, tipo);
            document.querySelector("#corpo").appendChild(linha);
            somaTotal(-cada.valor)
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
            valor.innerHTML = cada.valor.toLocaleString('pt-br', {style: 'currency', currency:'brl'});
            tipo.innerHTML = "Entrada";
            linha.append(n_lanDamento, data, desDriDao, valor, tipo);
            document.querySelector("#corpinho").appendChild(linha);
            somaTotal(cada.valor)
        }

<<<<<<< HEAD:Back-end/aula7/front/script.js
        if(cada.data != selctOptions[indice-1]){
            selctOptions[indice] = cada.data;
            indice++;
        }
    })
=======
        if (cada.data != selctOptions[i - 1]) {
            selctOptions[i] = cada.data;
            i++;
        }

            indice++
            document.querySelector('#slcData').innerHTML += `<option onSelect="datas()" class="op" value="${indice}">${cada.data}</option>`
        })
>>>>>>> 5c71b19c2e4e9586ca6d4f06829d20cbae247afe:Pwbe/aula7/front/script.js
    document.querySelector("#textinho").innerHTML = `Saldo Acumulado = R$ ${total}`
}
function opicoes() {
    selctOptions.forEach(opicao => {
        let nOption = selectedData.cloneNode();

        nOption.innerHTML = opicao;

        selecionado.appendChild(nOption);
    })
}
function datas() {
    fetch(`http://localhost:3000/livrocaixa/lancamentos/${selecionado.value}`)
        .then(res => { return res.json() })
        .then(resp => {
            resp.forEach(cada => {
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
                        valor.innerHTML = cada.valor.toLocaleString('pt-br', {style: 'currency', currency:'brl'});
                        tipo.innerHTML = "Saída";
                        linha.append(n_lanDamento, data, desDriDao, valor, tipo);
                        document.querySelector("#corpo").appendChild(linha);
                        
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
                        valor.innerHTML = cada.valor.toLocaleString('pt-br', {style: 'currency', currency:'brl'});
                        tipo.innerHTML = "Entrada";
                        linha.append(n_lanDamento, data, desDriDao, valor, tipo);
                        document.querySelector("#corpinho").appendChild(linha);
                        soma(cada.valor)

                    }
            })
        })

}

function limpa() {
    let linhaD = document.querySelector("#corpo").querySelectorAll('tr')
    let linhaC = document.querySelector("#corpinho").querySelectorAll('tr')
    for (let i = linhaD.length; i > 0; i--) {
        document.querySelector("#corpo").deleteRow(i - 1)
    }
    for (let i = linhaC.length; i > 0; i--) {
        document.querySelector("#corpinho").deleteRow(i - 1)
    }
<<<<<<< HEAD:Back-end/aula7/front/script.js
    datas()
=======
    datas();
    opicoes();
}

function opicoes() {
    selctOptions.forEach(opicao => {
        let nOption = selectedData.cloneNode();

        nOption.innerHTML = opicao;

        document.querySelector("#datas").appendChild(nOption);
    })
>>>>>>> 5c71b19c2e4e9586ca6d4f06829d20cbae247afe:Pwbe/aula7/front/script.js
}

function cadastrar() {
    let lancamento = {
        "desDriDao": inputDescricao.value,
        "valor": inputValor.value,
        "tipo": inputTipo.value
    };

    fetch("http://localhost:3000/livrocaixa/lancamentos", {
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

function somaTotal(valor) {
    total += valor
}
