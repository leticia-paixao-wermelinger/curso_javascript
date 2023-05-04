var hora = 19 // Definindo previsamente a hora. Não vai ser atualizado automaticamente.
console.log(`Agora são exatamente ${hora}h.`)
if (hora < 12 && hora >= 6) {
    console.log(`Bom dia!`)
} else if (hora < 6 || hora == 24){
    console.log(`É madrugada! Bons sonhos.`)
} else if (hora < 18) {
    console.log(`Boa tarde!`)
} else if (hora < 24){
    console.log(`Boa noite!`)
} else {
    console.log(`Hora inválida`)
}