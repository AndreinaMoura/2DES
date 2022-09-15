function login() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(dado => {
                let usuario = document.getElementById("usuario").value
                let senha = document.getElementById("senha").value

                if (usuario == dado.email && senha == dado.username) {
                    var info ={
                        "id": dado.id,
                        "nome": dado.name
                    }
                    
                    window.localStorage.setItem('infoUser', JSON.stringify(info))
                    window.location.href = "posts.html"   
                }
            })
        })
}

function posts() {
    var inf = JSON.parse(window.localStorage.getItem('infoUser'))
    
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + inf.id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(dado => {
                var p = document.createElement("p")
                let t1 = document.createElement("p")
                let t2 = document.createElement("p")
                var pt= document.createElement("div")
                var h = document.createElement("hr")
                pt.setAttribute("id","ptzinho")
                pt.appendChild(p)
                pt.appendChild(t1)
                p.innerHTML = inf.nome+": *"
                t1.style = "font-weight: bold"
                t1.innerHTML = dado.title+":*"
                t2.innerHTML = dado.body
                t2.style = "text-align: center; padding: 40px;"
                document.querySelector("body").append(pt, t2,h);
            })
        })
}
