var horario = new Date().getHours()
window.document.querySelector('#hora').innerHTML = `Agora são ${horario} horas.`

if (horario >= 6 && horario < 12){ // Nâo está funcionando...
    document.querySelector('img src') = "imagens/manha.png"
} else if (horario >= 0 && horario < 6) {
    document.querySelector('img src') = "imagens/madrugada.png"
} else if (horario > 18) {
    document.querySelector('ims src') = "imagens/noite.png"
} else {
    img.src = 'imagens/tarde.png'
}