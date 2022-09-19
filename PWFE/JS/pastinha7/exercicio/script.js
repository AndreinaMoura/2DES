var produtos = [
    {
        "img": "img/r1.png",
        "nome": "Camisa Guns n' Roses",
        "valor": "100,00"
    },
    {
        "img": "img/r2.png",
        "nome": "Camisa Nirvana",
        "valor": "100,00"
    },
    {
        "img": "img/r3.png",
        "nome": "Camisa Kiss",
        "valor": "100,00"
    },
    {
        "img": "img/r4.png",
        "nome": "Camisa Queen",
        "valor": "100,00"
    },
    {
        "img": "img/r5.png",
        "nome": "Camisa Slipknot",
        "valor": "100,00"
    },
    {
        "img": "img/r6.png",
        "nome": "Camisa Bring me to horizon",
        "valor": "100,00"
    }
];

var item = document.querySelector(".bl");

function produtinhos() {
    produtos.forEach(cada => {
        let novo = item.cloneNode(true)

        novo.classList.remove("modelo")

        novo.querySelector("#img-produto").src = cada.img;
        novo.querySelector("#nome").innerHTML = cada.nome;
        novo.querySelector("#valor").innerHTML = "R$ " + cada.valor;

        document.querySelector("#principal").appendChild(novo);
    })
}

var humaninho = [
    {
        "usuario": "beatriz",
        "senha": "princesinha123",
    },
    {
        "usuario": "andre",
        "senha": "123",
    }
];

function login() {
    humaninho.forEach(cada => {
        var usuario = document.querySelector("#user").value
        var senha = document.querySelector("#pass").value
        if (cada.usuario == usuario && cada.senha == senha) {
            window.location.href = "./home.html";
        }else if (usuario.lenght == null || senha.lenght == null) {
            document.querySelector("#resultado").display = "flex"
            document.querySelector("#resultado").style.color = "red"
            document.querySelector("#resultado").innerHTML = "Preencha todos os campos!"
        } else {
            document.querySelector("#resultado").display = "flex"
            document.querySelector("#resultado").style.color = "red"
            document.querySelector("#resultado").innerHTML = "Senha ou usuário inválidos"
        }
    })
}