var agora = new Date() // Pega as informações de data e hora automaticamente, do sistema de quem está utilizando.

var hora = agora.getHours () // Pq que só sai a hora redonda, ignorando os minutos? Talvez com o getTime(), mas eu tentei e não deu certo.... Pq?

console.log(`Agora são exatamente ${hora}h.`)

if (hora < 12 && hora >= 6) {
    console.log(`Bom dia!`)
} else if (hora < 6){
    console.log(`É madrugada! Bons sonhos.`)
} else if (hora < 18) {
    console.log(`Boa tarde!`)
} else{
    console.log(`Boa noite!`)
}

