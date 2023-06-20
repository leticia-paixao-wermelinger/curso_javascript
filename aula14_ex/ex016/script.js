function carregar() {
    var inicio = Number(window.document.querySelector('#start').value)
    var final = Number(window.document.querySelector('#ending').value)
    var distancia = Number(window.document.querySelector('#step').value)

    if (inicio.length == 0 || final.length == 0 || distancia.length == 0) {
        window.document.getElementById('contagem').innerHTML = 'Por favor, preencha todos os espaços em branco para realizar a contagem.'
    } else {
        window.document.getElementById('contagem').innerHTML = `Você solicitou a seguinte contagem: O número inicial é ${inicio}, o final é ${final} e os números vão pular de ${distancia} em ${distancia}.`
        
        if (inicio < final){
            for (var n = inicio ; n <= final ; n += distancia){ //Contagem crescente
                window.document.querySelector('#resultado').innerHTML += ` ${n} &#9998; ` // No vídeo explicativo, o Prof. ensinou o código unicode /u{código} para colocar um símbolo, mas eu havia feito aqui com o código do HTML e funcionou. Está errado?
            }    
        } else {
            for (var n = inicio ; n >= final ; n -= distancia){ // Contagem regressiva
                window.document.querySelector('#resultado').innerHTML += ` ${n} &#9998; ` // No vídeo explicativo, o Prof. ensinou o código unicode /u{código} para colocar um símbolo, mas eu havia feito aqui com o código do HTML e funcionou. Está errado?
            }    
        }
        /*
        if (distancia.length == 0){
            distancia = '1'
            __
        } else {
            __
            }
        }*/
    }
}

/*
    Pontos para lembrar:
        1. Eu sempre esqueço de transformar um número, com o Number()
        2. Se eu já coloquei .value na variável, não precisa repetir
        3. Gravar / Entender melhor, na prática, a diferença entre = e ==
        4. Lembrar da existência do += para incluir algo no parágrafo sem apagar o que já estava antes!
        5. Eu ainda não consegui entender como funciona o .write. Toda vez que tendo utilizar dá erro... 
        6. Para utilizar .length a variável que vem antes do ponto não pode ter sido alterada para Number()
*/