function carregar(){
    fetch("https://patrimoniomongo.herokuapp.com/read/")
    .then(response => {
        return response.json();
    })
    .then((data) => {
        data.forEach(cada => {

            var divizinha = document.querySelector('.corpo').cloneNode(true)
            var novo = document.querySelector('.corpinho')

            novo.classList.remove("modelo");

            novo.querySelector('#id').innerHTML = cada._id
            novo.querySelector('#ni').innerHTML = cada.ni
            novo.querySelector('#aquisicao').innerHTML = cada.aquisicao
            novo.querySelector('#denominacao').innerHTML = cada.denominacao
            novo.querySelector('#valor').innerHTML = cada.valor
            novo.querySelector('#valor').src = cada.img

            document.querySelector('.corpo').appendChild(novo)

            // document.querySelector('#quaseCorpinho').appendChild(divizinha)
        })
    })

}