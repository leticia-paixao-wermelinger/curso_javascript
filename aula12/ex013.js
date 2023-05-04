var diaSem = new Date().getDay()

/*
        Para o JavaScript:
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch (diaSem) {
    case 0:
        console.log(`Hoje é domingo`)
        break
    case 1:
        console.log(`Hoje é segunda-feira`)
        break
    case 2:
        console.log(`Hoje é terça-feira`)
        break
    case 3:
        console.log(`Hoje é quarta-feira`)
        break
    case 4:
        console.log(`Hoje é quinta-feira`)
        break
    case 5:
        console.log(`Hoje é sexta-feira`)
        break
    default:
        console.log(`Hoje é sábado`)
        break
}

var hoje = new Date()
var diaMes = hoje.getDate()
var mes = hoje.getMonth()
var ano = hoje.getFullYear()

switch (mes){
    case 0:
        var mes = "Janeiro"
        break
    case 1:
        var mes = "Fevereiro"
        break
    case 2:
        var mes = "Março"
        break
    case 3:
        var mes = "Abril"
        break
    case 4:
        var mes = "Maio"
        break
    case 5:
        var mes = "Junho"
        break
    case 5:
        var mes = "Julho"
        break
    case 5:
        var mes = "Agosto"
        break
    case 5:
        var mes = "Setembro"
        break
    case 5:
        var mes = "Outubro"
        break
    case 5:
        var mes = "Novembro"
        break
    default:
        var mes = "Dezembro"
        break
}

console.log(`Hoje é dia ${diaMes} de ${mes} de ${ano}.`)

if (diaMes == 4 && mes == "Maio") {
    console.log(`MAY THE 4TH BE WITH YOU!`)
}