// Funções JavaScript
var inpPlaca = document.querySelector("#placa");
var retorno = document.querySelector("#retorno");
var placa = inpPlaca.value;
var retornoCpf = document.getElementById("retornoCpf");
var cpfv = document.getElementById("cpf");
var cpf = cpfv.value;

// 1 - Crie uma função que valide se um valor passado como parâmetro é uma placa de automóvel 
// ex: validarPlaca(placa) a função deve retornar um valor boolean, “true” se for uma placa válida e “false” se não for válida.
// OBS: dev validar tanto as placas antigas ex: ABC1212 como as novas ABC1B12

function ex1() {
    if (validarPlaca(inpPlaca.value)) {
        retorno.style = "color: green";
        retorno.innerHTML = "Placa Válida";
    } else {
        retorno.style = "color: red";
        retorno.innerHTML = "Placa Inválida";
    }
}

function ex2() {
    if (validarPlaca(cpfv.value)) {
        retornoCpf.style = "color: green";
        retornoCpf.innerHTML = "CPF Válido";
    } else {
        retornoCpf.style = "color: red";
        retornoCpf.innerHTML = "CPF Inválido";
    }
}

function validarPlaca(placa) {
    if (placa.length == 7) {
        let modeloAntigo = /^[a-zA-Z]{3}[0-9]{4}$/;
        let modeloNovo = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
        let modeloMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
        if (modeloAntigo.test(placa) || modeloNovo.test(placa) || modeloMoto.test(placa)) return true
    }
    return false;
}



// var quantia = document.getElementById("quantia");
// var valTel = document.getElementById("valTel");
// var quanto = document.getElementById("quanto");
// var input = document.getElementById("input");

// 2 – Crie uma função para validar se um CPF é válido, busque na internet quais são as regras para que um CPF seja validado.A função deve ser no mesmo modelo da função anterior 
// ex: validaCPF(cpf) e retornar verdadeiro ou falso. 

function validaCPF(cpf) {
    cpf = cpf.replace(".", "");
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");
    cpf = cpf.replace("/", "");

    let d1 = 0, d2 = 0;
    for (let i = 0; i <= 8; i++) {
        d1 += cpf[i] * (i + 1);
        d2 += cpf[i] * i;
    }
    d1 %= 11;
    if (d1 == 10) d1 = 0;
    if (d1 != cpf[9]) return false;

    d2 += d1 * 9;
    d2 %= 11;
    if (d2 == 10) d2 = 0;
    if (d2 != cpf[10]) return false;

    return true;
}


// 3 – Crie uma função que gere telefones aleatórios, a função deve receber como parâmetro o número ddd e a quantidade de telefones e deve retornar um vetor com os números gerados.
// Ex: geraTelefones(19, 3) e deve retornar ex: 19 - 98777 - 7898, 19 - 98777 - 7898, 19 - 94687 - 4568

function geraTelefones(ddd, qtd) {
  let numeros = new Array();
  
        for (i = 0; i < qtd; i++) {
            
            numeros.push(ddd + (Math.floor(Math.random() * (999999999 - 980000000 + 1)) + 980000000));
        }
    }

// 4 – Crie uma função que gere CPFs válidos aleatórios, deve receber como parâmetro quantos CPFs deve gerar e retornar um vetor com os CPFs gerados.   

function cpfAleatorio(qtd) {
    input.innerHTML = null;
    qtd = quanto.value;
    if (qtd.length == 0) {
        input.style = "color: red";
        input.innerHTML = `Preencha o campo`;
    } else {
        var n1, n2, n3, n4, n5, n6, n7, n8, n9;
        for (i = 0; i < qtd; i++) {
            n1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n4 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n5 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n6 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n7 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n8 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            n9 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

            var soma = 0;

            soma = (n1 * 10) + (n2 * 9) + (n3 * 8) + (n4 * 7) + (n5 * 6) + (n6 * 5) + (n7 * 4) + (n8 * 3) + (n9 * 2);

            var n10 = (soma * 10) % 11;

            if ((n10 == 10) || (n10 == 11)) n10 = 0;

            var soma = 0;

            soma = (n1 * 11) + (n2 * 10) + (n3 * 9) + (n4 * 8) + (n5 * 7) + (n6 * 6) + (n7 * 5) + (n8 * 4) + (n9 * 3) + (n10 * 2);

            var n11 = (soma * 10) % 11;
            if ((n11 == 10) || (n11 == 11)) n11 = 0;

            if (n10 != n11) {
                input.style = "color: black";
                input.innerHTML += `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${n10}${n11}</br>`;
            }
        }
    }
}