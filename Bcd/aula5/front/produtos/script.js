const produtos = document.querySelector(".produtos");
const produto = document.querySelector(".produto");

fetch("http://localhost:3000/produtos")
    .then(resp => { return resp.json() })
    .then(produtos => {
        produtos.forEach(produto => {
            duplicarProduto(produto);
        });
    });

function duplicarProduto(info) {
    let nProd = produto.cloneNode(true);

    nProd.classList.remove("model");

    nProd.querySelector("#nome").innerHTML = info.nome;
    nProd.querySelector("#preco").innerHTML = "R$ " + info.preco;

    produtos.appendChild(nProd);
}