function verificar () {
    var anoAtual = new Date.getFullYear()

    if (ano < 1880 && ano > anoAtual){
        window.document.getElementById('#result').innerHTML = 'O ano de nascimento digitado é inválido'
    } else {
        window.document.getElementById('#result').innerHTML = `Você nasceu em ${ano}.`
    }

/* Tentativa pessoal inicialm nas eu estava indo por um caminho errado...
    var img = window.document.getElementById('imagem')
    var nasc = Number(window.document.getElementById(ano))

    if (ano < 12){
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
    */
}