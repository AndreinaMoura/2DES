function datas() {
    var ano = Math.floor(Math.random() * (2006 - 1990 + 1)) + 1990;
    var mes = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var dia = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
    
    console.log(dia + "/" + mes + "/" + ano);
    
}

for (i = 0; i < 27; i++) {
    console.log(datas());
}