function salvar() {
    let infoUser = {
        "id": "abc1234",
        "nome": "Beltrano",
        "avatar": "http......."
    };

    let infoTexto = JSON.stringify(infoUser);

    window.localStorage.setItem("userData", infoTexto);
}

function carregar() {
    let info = window.localStorage.getItem("userData");
    let objUser = JSON.parse(info);
    console.log(objUser)
    console.log(info)

}

function apagar() {
    window.localStorage.removeItem("userData"); //item
    window.localStorage.clear(); // tudo
    //objUser.pop //remove o ultimo item a lista
}