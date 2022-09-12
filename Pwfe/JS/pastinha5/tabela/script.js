var tr = document.createElement("tr");
var th = document.createElement("th");
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var nome = document.getElementById("nome");
var cargo = document.getElementById("cargo");
var salario = document.getElementById("salario");
var thead = document.querySelector("thead");
var tbody = document.querySelector("tbody");
var txt = document.querySelector("p");
var n = nome.value;
var c = cargo.value;
var s = salario.value;
th.innerHTML = "nome";
th1.innerHTML = "cargo";
th2.innerHTML = "salario";

function tabelinha() {
    if ((n != null) && (c != null) && (s != null)) {
        
        tr.appendChild(th);
        tr.appendChild(th1);
        tr.appendChild(th2);
        thead.appendChild(tr);

        var td = document.createElement("td");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var tr2 = document.createElement("tr");

        td.innerHTML = nome.value;
        td1.innerHTML = cargo.value;
        td2.innerHTML = salario.value;

        tr2.appendChild(td);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tbody.appendChild(tr2);

        nome.value = null;
        cargo.value = null;
        salario.value = null;
    } else {
        txt.style = "color: red";
        txt.innerHTML = "Preencha todos os campos!";
    }
}