// // function navegar(){ //document, location e history
// //     // window.location.href = "./home/home.html";
// //     let dado = document.querySelector("#teste").value;
// //     console.log(md5(dado)); 
// // }
// // // console.log(md5('1234'));

// var paragrafo = document.querySelector("#info").value;
// console.log(md5(paragrafo)); 
// var info = "";
// var teste = "";
// document.querySelector("#teste").addEventListener("keyup", (act) => {
//     // console.log(act.key)//
//     // console.log(act.target.value)//quem recebeu a ação
// //     info += act.key
// //     teste += "*"
// //     act.target.value = teste
// console.log(act);
// })

// function navegar() {
//     console.log(info);
// }

function navegar() {
    let val = document.querySelector("#teste").value

    let teste = new Array();

    let arrFunc = new Array();
    teste.push(1)
    teste.push(2)
    teste.push(3)
    let func = {
        "nome": val,
        "premios": teste,
        "cargo": {
            "nome": "gerente"
        }
    }
    arrFunc.push(func)

    arrFunc[0].premios.forEach(premio => {
        console.log(premio);
    });

}