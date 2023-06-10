function verificar () {
    var anoAtual = new Date().getFullYear()
    var ano = Number(window.document.getElementById('ano').value)
    var img = document.getElementById('imagem')

    if (ano < 1880 || ano > anoAtual){
        window.document.getElementById('result').innerHTML = 'O ano de nascimento digitado é inválido'
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = anoAtual - ano
        var genero = ''
        var raca = document.getElementsByName('cor')
        var cor = ''
        if (sex[0].checked){
            genero = 'uma mulher'
            if (raca[0].checked){
                cor = 'branca'
                if (idade <= 11){
                    img.src = 'imagens/kid_white_girl.png'
                } else if (idade >= 12 && idade < 18){
                    img.src = 'imagens/teen_white_girl.png'
                } else if (idade >= 18 && idade < 39){
                    img.src = 'imagens/young_white_woman.png'
                } else if (idade > 39 && idade < 70){
                    img.src = 'imagens/middleage_white_woman.png'
                } else {
                    img.src = 'imagens/old_white_woman.png'
                }
            } else if (raca[1].checked) {
                cor = 'preta'
                if (idade <= 11){
                    img.src = 'imagens/kid_black_girl.png'
                } else if (idade >= 12 && idade < 18){
                   img.src = 'imagens/teen_black_girl.png'
                } else if (idade >= 18 && idade < 39){
                   img.src = 'imagens/young_black_woman.png'
                } else if (idade > 39 && idade < 70){
                   img.src = 'imagens/middleage_black_woman.png'
                } else {
                    img.src = 'imagens/old_black_woman.png'
                }
            }
        } else if (sex[1].checked){
            genero = 'um homem'
            if (raca[0].checked){
                cor = 'branco'
                if (idade <= 11){
                    img.src = 'imagens/kid_white_boy.png'
                } else if (idade >= 12 && idade < 18){
                    img.src = 'imagens/teen_white_boy.png'
                } else if (idade >= 18 && idade < 39){
                    img.src = 'imagens/young_white_man.png'
                } else if (idade > 39 && idade < 70){
                    img.src = 'imagens/middleage_white_man.png'
                } else {
                    img.src = 'imagens/old_white_man.png'
                }
            } else if (raca[1].checked){
                cor = "preto"
                if (idade <= 11){
                    img.src = 'imagens/kid_black_boy.png'
                } else if (idade >= 12 && idade < 18){
                    img.src = 'imagens/teen_black_boy.png'
                } else if (idade >= 18 && idade < 39){
                    img.src = 'imagens/young_black_man.png'
                } else if (idade > 39 && idade < 70){
                    img.src = 'imagens/middleage_black_man.png'
                } else {
                    img.src = 'imagens/old_black_man.png'
                }
            }
        }
        window.document.getElementById('result').innerHTML = `Você é ${genero} ${cor} e, esse ano, você completa ${idade} anos de vida.`
    }
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
