const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");
var indice
var dd = []
var linha
var n_lanDamento
var data
var desDriDao
var valor
var tipo
var inputDescricao = document.querySelector("#descricao");
var inputValor = document.querySelector("#valor");
var inputTipo = document.querySelector("#tipo");
var selctOptions = []
var total = 0;

function carregar() {
    fetch('http://localhost:3000/livrocaixa/lancamentos')
        .then((response) => {
            return response.json();
        })
        .then((dados) => {
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

        if (cada.data != selctOptions[i - 1]) {
            selctOptions[i] = cada.data;
            i++;
        }

            indice++
            document.querySelector('#slcData').innerHTML += `<option onSelect="datas()" class="op" value="${indice}">${cada.data}</option>`
        })
    document.querySelector("#textinho").innerHTML = `Saldo Acumulado = R$ ${total}`
}

function datas() {
    fetch(`http://localhost:3000/livrocaixa/lancamentos/${document.querySelector('#slcData').value}`)
        .then(res => { return res.json() })
        .then(resp => {
            resp.forEach(cada => {
                console.log('ok')
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
        })

}

function limpa() {
    let linhaD = document.querySelector("#corpo").querySelectorAll('tr')
    let linhaC = document.querySelector("#corpinho").querySelectorAll('tr')
    for (let i = linhaD.length; i > 1; i--) {
        document.querySelector("#corpo").deleteRow(i - 1)
    }
    for (let i = linhaC.length; i > 1; i--) {
        document.querySelector("#corpinho").deleteRow(i - 1)
    }
    datas();
    opicoes();
}

function opicoes() {
    selctOptions.forEach(opicao => {
        let nOption = selectedData.cloneNode();

        nOption.innerHTML = opicao;

        document.querySelector("#datas").appendChild(nOption);
    })
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

function sominha(valor) {
    total += valor
}