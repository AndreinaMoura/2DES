fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(dado => {
            let t1 = document.createElement("p")
            t1.innerHTML = dado.title

            let t2 = document.createElement("p")
            t2.innerHTML = dado.id

            let inp = document.createElement("input")
            inp.type = "checkbox"
            inp.disabled = "disabled"

            if (dado.completed) {
                inp.checked = true;
            }
            let linha = document.createElement("hr")
            
            document.querySelector(".corpinho").append(t1, t2, inp, linha);
        })
    })
