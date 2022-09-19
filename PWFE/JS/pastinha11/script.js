function alunos() {
    fetch('http://localhost:5000/academia/alunos')
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                var novo = document.querySelector('.corpinho').cloneNode(true)
                var divizinha = document.createElement('div')

                novo.classList.remove("modelo");

                novo.querySelector('#id_aluno').innerHTML = 'ID do Aluno'
                novo.querySelector('#id_aluno').style = 'font-weight: bold'
                novo.querySelector('#t1').innerHTML = cada.id_aluno
                novo.querySelector('#nome').innerHTML = 'Nome'
                novo.querySelector('#nome').style = 'font-weight: bold'
                novo.querySelector('#t2').innerHTML = cada.nome
                novo.querySelector('#nascimento').innerHTML = 'Nascimento'
                novo.querySelector('#nascimento').style = 'font-weight: bold'
                novo.querySelector('#t3').innerHTML = cada.nascimento
                novo.querySelector('#sexo').innerHTML = 'Sexo'
                novo.querySelector('#sexo').style = 'font-weight: bold'
                novo.querySelector('#t4').innerHTML = cada.sexo
                novo.querySelector('#peso').innerHTML = 'Peso'
                novo.querySelector('#peso').style = 'font-weight: bold'
                novo.querySelector('#t5').innerHTML = cada.peso
                novo.querySelector('#telefones').innerHTML = 'Telefones'
                novo.querySelector('#telefones').style = 'font-weight: bold'
                novo.querySelector('#t6').innerHTML = cada.telefones

                divizinha.appendChild(novo)

                document.querySelector('#quaseCorpinho').appendChild(divizinha)
            })
        })
}

function aparelhos() {
    fetch('http://localhost:5000/academia/aparelhos')
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                var novo = document.querySelector('.corpinho').cloneNode(true)
                var divizinha = document.createElement('div')

                novo.classList.remove("modelo");

                novo.querySelector('#id_aluno').innerHTML = 'ID do Aluno'
                novo.querySelector('#id_aluno').style = 'font-weight: bold'
                novo.querySelector('#t1').innerHTML = cada.id_aluno
                novo.querySelector('#nome').innerHTML = 'Nome'
                novo.querySelector('#nome').style = 'font-weight: bold'
                novo.querySelector('#t2').innerHTML = cada.nome
                novo.querySelector('#nascimento').innerHTML = 'Nascimento'
                novo.querySelector('#nascimento').style = 'font-weight: bold'
                novo.querySelector('#t3').innerHTML = cada.nascimento
                novo.querySelector('#sexo').innerHTML = 'Sexo'
                novo.querySelector('#sexo').style = 'font-weight: bold'
                novo.querySelector('#t4').innerHTML = cada.sexo
                novo.querySelector('#peso').innerHTML = 'Peso'
                novo.querySelector('#peso').style = 'font-weight: bold'
                novo.querySelector('#t5').innerHTML = cada.peso
                novo.querySelector('#telefones').innerHTML = 'Telefones'
                novo.querySelector('#telefones').style = 'font-weight: bold'
                novo.querySelector('#t6').innerHTML = cada.telefones

                divizinha.appendChild(novo)

                document.querySelector('#quaseCorpinho').appendChild(divizinha)
            })
        })
}

function exercicios() {
    fetch('http://localhost:5000/academia/exercicios')
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                var novo = document.querySelector('.corpinho').cloneNode(true)
                var divizinha = document.createElement('div')

                novo.classList.remove("modelo");

                novo.querySelector('#id_aluno').innerHTML = 'ID do Aluno'
                novo.querySelector('#id_aluno').style = 'font-weight: bold'
                novo.querySelector('#t1').innerHTML = cada.id_aluno
                novo.querySelector('#nome').innerHTML = 'Nome'
                novo.querySelector('#nome').style = 'font-weight: bold'
                novo.querySelector('#t2').innerHTML = cada.nome
                novo.querySelector('#nascimento').innerHTML = 'Nascimento'
                novo.querySelector('#nascimento').style = 'font-weight: bold'
                novo.querySelector('#t3').innerHTML = cada.nascimento
                novo.querySelector('#sexo').innerHTML = 'Sexo'
                novo.querySelector('#sexo').style = 'font-weight: bold'
                novo.querySelector('#t4').innerHTML = cada.sexo
                novo.querySelector('#peso').innerHTML = 'Peso'
                novo.querySelector('#peso').style = 'font-weight: bold'
                novo.querySelector('#t5').innerHTML = cada.peso
                novo.querySelector('#telefones').innerHTML = 'Telefones'
                novo.querySelector('#telefones').style = 'font-weight: bold'
                novo.querySelector('#t6').innerHTML = cada.telefones

                divizinha.appendChild(novo)

                document.querySelector('#quaseCorpinho').appendChild(divizinha)
            })
        })
}

function fichas() {
    fetch('http://localhost:5000/academia/fichas')
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                var novo = document.querySelector('.corpinho').cloneNode(true)
                var divizinha = document.createElement('div')

                novo.classList.remove("modelo");

                novo.querySelector('#id_aluno').innerHTML = 'ID do Aluno'
                novo.querySelector('#id_aluno').style = 'font-weight: bold'
                novo.querySelector('#t1').innerHTML = cada.id_aluno
                novo.querySelector('#nome').innerHTML = 'Nome'
                novo.querySelector('#nome').style = 'font-weight: bold'
                novo.querySelector('#t2').innerHTML = cada.nome
                novo.querySelector('#nascimento').innerHTML = 'Nascimento'
                novo.querySelector('#nascimento').style = 'font-weight: bold'
                novo.querySelector('#t3').innerHTML = cada.nascimento
                novo.querySelector('#sexo').innerHTML = 'Sexo'
                novo.querySelector('#sexo').style = 'font-weight: bold'
                novo.querySelector('#t4').innerHTML = cada.sexo
                novo.querySelector('#peso').innerHTML = 'Peso'
                novo.querySelector('#peso').style = 'font-weight: bold'
                novo.querySelector('#t5').innerHTML = cada.peso
                novo.querySelector('#telefones').innerHTML = 'Telefones'
                novo.querySelector('#telefones').style = 'font-weight: bold'
                novo.querySelector('#t6').innerHTML = cada.telefones

                divizinha.appendChild(novo)

                document.querySelector('#quaseCorpinho').appendChild(divizinha)
            })
        })
}


