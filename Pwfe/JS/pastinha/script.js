// var nome = "Fulano da Silva";

// alert(`Meu nome é ${nome}`);
// window.prompt("Serio mesmo?");
// let res = (a + b) / c;
// alert(res);

// ex1
// let a = 5, b = 8, c = 3;
// if (a == b && b == c) {
//     console.log("equilátero");
// }
// else if (a != b && b != c && a != c) {
//     console.log("escaleno");
// }
// else {
//     console.log("isósceles");
// }

//ex2
let salarios = [3200, 2500, 4000];
salarios.forEach(salario => {
    if (salario <= 1903.98) {
        console.log("isento");
    } else if (salario <= 2826.65) {
        let p =salario * 7.50;
        let valor = p - salario;
        console.log(valor);
    } else if (salario <= 3751.05) {
        let p = salario *  15;
        let valor = p - salario;
        console.log(valor);
    } else if (salario <= 4664.68) {
        let p = salario *  22.50;
        let valor = p - salario;
        console.log(valor);
    } else {
        let p = salario *  27.50;
        let valor = p - salario;
        console.log(valor);
    }
})