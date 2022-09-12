function buscar() {
    var cep = document.querySelector('#cep').value
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(response => {
            return response.json();
        })
        .then(data => {

            document.querySelector('#rua').value = data.logradouro
            document.querySelector('#complemento').value = data.complemento
            document.querySelector('#bairro').value = data.bairro
            document.querySelector('#cidade').value = data.localidade
            document.querySelector('#uf').value = data.uf

        })
}

function cadastrar() {
    var senha = document.querySelector('#senhaUser').value
    var Rsenha = document.querySelector('#repetirSenhaUser').value
    if(senha === Rsenha){
        document.querySelector('#some').src = 'https://icon-library.com/images/icon-check-mark/icon-check-mark-5.jpg'
    }else{
        document.querySelector('#some').src = "https://cdn-icons-png.flaticon.com/512/179/179386.png"
    }

}
