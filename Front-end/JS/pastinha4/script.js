// Funções JavaScript
var p = document.getElementById("placa");
var cpfV = document.getElementById("cpf");
var dd = document.getElementById("dd");
var quantia = document.getElementById("quantia");
var valTel = document.getElementById("valTel");
var quanto = document.getElementById("quanto");
var input = document.getElementById("input");

// 1 - Crie uma função que valide se um valor passado como parâmetro é uma placa de automóvel 
// ex: validarPlaca(placa) a função deve retornar um valor boolean, “true” se for uma placa válida e “false” se não for válida.
// OBS: dev validar tanto as placas antigas ex: ABC1212 como as novas ABC1B12

function validarPlaca(placa) {
    var valPlaca = document.getElementById("valPlaca");
    valPlaca.innerHTML = null;
    placa = p.value;
    const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
    const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
    if (regexPlaca.test(placa)) {
        valPlaca.style = "color: green";
        valPlaca.innerHTML = "Placa válida no formato atual";
    } else if (regexPlacaMercosulCarro.test(placa)) {
        valPlaca.style = "color: green";
        valPlaca.innerHTML = "Placa válida (padrão Mercosul)";
    } else {
        valPlaca.style = "color: red";
        valPlaca.innerHTML = "Placa inválida";
    }
}

// 2 – Crie uma função para validar se um CPF é válido, busque na internet quais são as regras para que um CPF seja validado.A função deve ser no mesmo modelo da função anterior 
// ex: validaCPF(cpf) e retornar verdadeiro ou falso. 

function validaCPF(cpf) {
    var valCpf = document.getElementById("valCpf");
    valCpf.innerHTML = null;
    cpf = cpfV.value;
    cpf = cpf.replace(".", "");
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");
    cpf = cpf.replace("/", "");
    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" ||
        cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
        valCpf.style = "color: red";
        valCpf.innerHTML = "CPF inválido";
    } else if (cpf == null) {
        valCpf.style = "color: red";
        valCpf.innerHTML = "CPF inválido";
    } else {
        var soma = 0;
        soma += (parseInt(cpf.substring(0, 1))) * 10;
        soma += (parseInt(cpf.substring(1, 2))) * 9;
        soma += (parseInt(cpf.substring(2, 3))) * 8;
        soma += (parseInt(cpf.substring(3, 4))) * 7;
        soma += (parseInt(cpf.substring(4, 5))) * 6;
        soma += (parseInt(cpf.substring(5, 6))) * 5;
        soma += (parseInt(cpf.substring(6, 7))) * 4;
        soma += (parseInt(cpf.substring(7, 8))) * 3;
        soma += (parseInt(cpf.substring(8, 9))) * 2;
    }
    var resto1 = (soma * 10) % 11;
    if ((resto1 == 10) || (resto1 == 11)) {
        resto1 = 0;
    }
    var soma = 0;
    soma += (parseInt(cpf.substring(0, 1))) * 11;
    soma += (parseInt(cpf.substring(1, 2))) * 10;
    soma += (parseInt(cpf.substring(2, 3))) * 9;
    soma += (parseInt(cpf.substring(3, 4))) * 8;
    soma += (parseInt(cpf.substring(4, 5))) * 7;
    soma += (parseInt(cpf.substring(5, 6))) * 6;
    soma += (parseInt(cpf.substring(6, 7))) * 5;
    soma += (parseInt(cpf.substring(7, 8))) * 4;
    soma += (parseInt(cpf.substring(8, 9))) * 3;
    soma += (parseInt(cpf.substring(9, 10))) * 2;

    var resto2 = (soma * 10) % 11;
    if ((resto2 == 10) || (resto2 == 11)) {
        resto2 = 0;
    }

    if (
        (resto1 == (parseInt(cpf.substring(9, 10)))) &&
        (resto2 == (parseInt(cpf.substring(10, 11))))) {
        valCpf.style = "color: green";
        return valCpf.innerHTML = "CPF válido";
    } else {
        valCpf.style = "color: red";
        return valCpf.innerHTML = "CPF inválido";
    }
}

// 3 – Crie uma função que gere telefones aleatórios, a função deve receber como parâmetro o número ddd e a quantidade de telefones e deve retornar um vetor com os números gerados.
// Ex: geraTelefones(19, 3) e deve retornar ex: 19 - 98777 - 7898, 19 - 98777 - 7898, 19 - 94687 - 4568

function geraTelefones(ddd, qtd) {
    valTel.innerHTML = null;
    ddd = dd.value;
    qtd = quantia.value;
    if (ddd.length == 0 || qtd.length == 0) {
        valTel.style = "color: red";
        valTel.innerHTML = `Preencha todos os campos`;
    } else {
        for (i = 0; i < qtd; i++) {
            var n1 = Math.floor(Math.random() * (99999 - 98000 + 1)) + 98000;
            var n2 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            valTel.style = "color: black";
            valTel.innerHTML += `(${ddd}) ${n1}-${n2}</br>`;
        }
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
            soma += n1 * 10;
            soma += n2 * 9;
            soma += n3 * 8;
            soma += n4 * 7;
            soma += n5 * 6;
            soma += n6 * 5;
            soma += n7 * 4;
            soma += n8 * 3;
            soma += n9 * 2;
            var n10 = (soma * 10) % 11;
            if ((n10 == 10) || (n10 == 11)) {
                n10 = 0;
            }
            var soma = 0;
            soma += n1 * 11;
            soma += n2 * 10;
            soma += n3 * 9;
            soma += n4 * 8;
            soma += n5 * 7;
            soma += n6 * 6;
            soma += n7 * 5;
            soma += n8 * 4;
            soma += n9 * 3;
            soma += n10 * 2;
            var n11 = (soma * 10) % 11;
            if ((n11 == 10) || (n11 == 11)) {
                n11 = 0;
            }
            if (n10 != n11) {
                input.style = "color: black";
                input.innerHTML += `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${n10}${n11}</br>`;
            }
        }
    }
}

// 5 – Crie uma interface web (Página HTML) para testar as funções criadas, com campos de input para digitar placa de veículo, CPF, quantos Telefones e quantos CPFs deverão ser gerados.