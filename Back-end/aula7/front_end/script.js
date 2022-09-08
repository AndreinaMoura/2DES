const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");
const btCadedit = document.querySelector("#cadedit");
var indice
var dd = []
var linha
var n_lanDamento
var data
var desDriDao
var valor
var tipo
var valoresC
var valoresD

function carregar() {
    fetch('http://localhost:3000/livrocaixa/lancamentos')
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
        if (cada.tipo === 'D') {
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
    
            document.querySelector("#corpo").appendChild(linha);
            // valor.innerHTML += valoresD
            // console.log(va)

        } else if (cada.tipo === 'C') {
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
    
            document.querySelector("#corpinho").appendChild(linha);
            let va = valor
            let res = va + valoresC
            console.log(res)
        }

        let saldoAcumulado = valoresC + valoresD
        document.querySelector('#textinho').innerHTML = `Saldo Acumulado = R$ ${saldoAcumulado}`
        indice++
        document.querySelector('#slcData').innerHTML += `<option onSelect="clique()" class="op" value="${indice}">${cada.data}</option>`
    })
}
function clique() {

    var datas = document.querySelectorAll(".op").value

}

function cadastrar() {
    let lancamento = {
        "n_lanDamento": inputCodigo.value,
        "data": inputNome.value,
        "desDriDao": inputQuantidade.value,
        "valor": inputValor.value,
        "tipo": inputValor.value
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
            if (resp.cod !== undefined) {
                alert("Lançado Com Sucesso !");
                window.location.reload();
            } else {
                alert("Falha ao Lançar");
            }
        })
}


function fecharModalExcluir() {
    modalExcluir.classList.add("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function abrirModalCadastro() {
    inputCodigo.value = ''
    inputNome.value = ''
    inputQuantidade.value = ''
    inputValor.value = ''
    inputValor.value = ''
    modalEditar.classList.remove("model");
}

