var indice
var dd = []
var data

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
            let linha = document.createElement("tr");
            let n_lanDamento = document.createElement("td");
            let data = document.createElement("td");
            let desDriDao = document.createElement("td");
            let valor = document.createElement("td");
            let tipo = document.createElement("td");
            n_lanDamento.innerHTML = cada.n_lanDamento;
            data.innerHTML = cada.data;
            desDriDao.innerHTML = cada.desDriDao;
            valor.innerHTML = cada.valor;
            tipo.innerHTML = "Saída";
            linha.appendChild(n_lanDamento);
            linha.appendChild(data);
            linha.appendChild(desDriDao);
            linha.appendChild(valor);
            linha.appendChild(tipo);
            document.querySelector("#corpo").appendChild(linha);

        } else if (cada.tipo === 'C') {
            let linha = document.createElement("tr");
            let n_lanDamento = document.createElement("td");
            let data = document.createElement("td");
            let desDriDao = document.createElement("td");
            let valor = document.createElement("td");
            let tipo = document.createElement("td");
            n_lanDamento.innerHTML = cada.n_lanDamento;
            data.innerHTML = cada.data;
            desDriDao.innerHTML = cada.desDriDao;
            valor.innerHTML = cada.valor;
            tipo.innerHTML = "Entrada";
            linha.appendChild(n_lanDamento);
            linha.appendChild(data);
            linha.appendChild(desDriDao);
            linha.appendChild(valor);
            linha.appendChild(tipo);
            document.querySelector("#corpinho").appendChild(linha);
        }
        // document.querySelector('#slcData').innerHTML += `<option id="l" value="${indice}">${cada.data}</option>`
        data = cada.data
        clique(data)
        indice++
    })
}
function clique(data){
    var coisa = document.querySelectorAll('#l').value
    if(coisa == data){
console.log(coisa)
    } else{
        console.log(coisa)
    }
}