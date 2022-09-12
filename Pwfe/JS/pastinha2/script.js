// //tagname, id, class
// var texto = document.getElementsByTagName("h1");

// // console.log(texto);

// var titulo = document.getElementById("titulo");

// var aluno = {
//     nome: "Fulano",
//     matricula: 234578
// };

// titulo.innerHTML = `Nome: ${aluno.nome} </br> Matricula: ${aluno.matricula}`;

// titulo.style.color = "blue";
// // titulo.style.margin = "200px";

// var mensagem = document.getElementById("mensagem");

// mensagem.style.display = "block";

// var divisao = document.getElementsByClassName("divisao");

// console.log(divisao);

// // document.querySelector();
// // document.querySelectorAll();

// var titulo2 = document.querySelector("#titulo"); //um elemento
// var div = document.querySelectorAll(".divisao"); //todos os elementos
// var msg = document.querySelector("h1");

// console.log(titulo2);
// console.log(div);

var busca = document.querySelector("#busca");

var linhas = document.querySelectorAll("tr");

var btBusca = document.querySelector("button");

btBusca.addEventListener("click", buscarNome);

busca.addEventListener("keyup", buscarNome);
function buscarNome() {
    // let encontrei = false;

    linhas.forEach((linha) => {

        let temp = linha.querySelector("td");
        if (temp != null) {
            // if (temp.innerHTML.toLowerCase() == busca.value.toLowerCase()) {
            //     alert("Encontrei!");
            //     encontrei = true;
            //     linha.style.fontWeight = "bold";
            // }
            //{-------------------------------------------}
            // if (temp.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
            //     linha.style.display = "table-row";
            // } else {
            //     linha.style.display = "none";
            // }
            //{-------------------------------------------}
            if (linha.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
                linha.style.display = "table-row";
            } else {
                linha.style.display = "none";
            }
        }
    });

    // if (!encontrei) alert("Não encontrei!");

}

// console.log(linhas);
// linhas.forEach(linha => {
//     let temp = linha.querySelector("td");
//     if(temp !=null){
//         console.log(temp.innerHTML);
//     }
// })
// linhas.forEach(linha => {
//     let temp = linha.querySelectorAll("td")[1];
//     if (temp != null) {
//         if (temp.innerHTML == "Gerente");
//         alert("encontrei!");
//     }
// })
// let v1 = 1;
// let v2 = "1";

// if(v1==v2){
//       console.log("Somos iguais");//valores iguais
// }
// if(v1===v2){
//     console.log("Somos iguais"); //tipos de variavel igual
// }