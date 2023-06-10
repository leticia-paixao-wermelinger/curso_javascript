function carregar() {
    var horario = new Date().getHours()
    window.document.querySelector('#hora').innerHTML = `Agora são ${horario} horas.`
    var img = window.document.getElementById('imagem')

    if (horario >= 6 && horario < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fed28b'
    } else if (horario >= 0 && horario < 6) {
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#81598d'
    } else if (horario > 18) {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#9e666f'
    } else if (horario == 18) {
        img.src = 'imagens/anoitecer.png'
        document.body.style.background = '#974e48'
    } else {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#72a0d4'
    }
}