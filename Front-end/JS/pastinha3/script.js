var nome = document.querySelector("#nome");
var cargo = document.querySelector("#cargo");
var salario = document.querySelector("#salario");
const vetor = document.querySelectorAll("tr");
nome.addEventListener("keyup", () => {
    vetor.forEach((linha) => {
        let temp = linha.querySelector("td");
        if(temp != null){
            if(linha.innerHTML.toLowerCase().includes(nome.value.toLowerCase())){
                linha.style.display = "table-row";
    
            }else{
                linha.style.display = "none";
            }
        }
    });
});
cargo.addEventListener("keyup", () => {
    vetor.forEach((linha) => {
        let temp = linha.querySelector("td");
        if(temp != null){
            if(linha.innerHTML.toLowerCase().includes(cargo.value.toLowerCase())){
                linha.style.display = "table-row";
    
            }else{
                linha.style.display = "none";
            }
        }
    });
});
salario.addEventListener("keyup", () => {
    vetor.forEach((linha) => {
        let temp = linha.querySelector("td");
        if(temp != null){
            if(linha.innerHTML.toLowerCase().includes(salario.value.toLowerCase())){
                linha.style.display = "table-row";
    
            }else{
                linha.style.display = "none";
            }
        }
    });
});