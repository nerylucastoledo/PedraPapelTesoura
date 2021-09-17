const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')

const textoVitorioso = document.querySelector('.texto-vitoria')
const corDoVitorioso = document.querySelector('.vitorioso')

const escolhas = document.querySelector('.escolhas')

const escolhaUsuario = document.querySelector('.escolha-usuario')
const escolhaComputador = document.querySelector('.escolha-computador')

const vitoriasDoUsuario = document.getElementById('vitoria-usuario')
const vitoriasDoComputador= document.getElementById('vitoria-computador')

var vitoriasUsuario = 1
var vitoriasComputador = 1

const aEscolhaDoComputador = () => {
    const escolhaComputador = Math.floor(Math.random() * 3 + 1)

    if(escolhaComputador === 1) {
        return 'pedra'
    } else if(escolhaComputador === 2) {
        return 'papel'
    } else {
        return 'tesoura'
    }
}

const aEscolhaDoUsuario = (maoSelecioanda) => {
    const masSelecionadaPeloComputador = aEscolhaDoComputador()
    const maoSelecioandaPeloUsuario = maoSelecioanda

    const resultado = resultadoJogo(maoSelecioandaPeloUsuario, masSelecionadaPeloComputador)

    escolhaUsuario.innerText = maoSelecioandaPeloUsuario[0].toUpperCase() + maoSelecioandaPeloUsuario.substr(1)
    escolhaComputador.innerText = masSelecionadaPeloComputador[0].toUpperCase() + masSelecionadaPeloComputador.substr(1)

    escolhas.style.opacity = 1

    if(resultado == 1) {
        vitoriasDoUsuario.innerText = vitoriasUsuario
        vitoriasUsuario += 1

        textoVitorioso.innerText = 'Você ganhou essa rodada!'
        corDoVitorioso.style.backgroundColor = "#7DFB7A"

    } else if(resultado == 0) {
        vitoriasDoComputador.innerText = vitoriasComputador
        vitoriasComputador += 1

        textoVitorioso.innerText = 'Você perdeu essa rodada!'
        corDoVitorioso.style.backgroundColor = "#EA8F8F"

    } else {
        textoVitorioso.innerText = 'Vocês empataram!'
        corDoVitorioso.style.backgroundColor = "rgb(196, 191, 191)"
    }

}

const resultadoJogo = (escolhaJogador, escolhaComputador) => {
    
    if (escolhaJogador === escolhaComputador) {
        return 2
    } else if (escolhaJogador === 'pedra' && escolhaComputador === 'papel') {
        return 0
    } else if (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') {
        return 1
    } else if (escolhaJogador === 'papel' && escolhaComputador === 'pedra') {
        return 1
    } else if (escolhaJogador === 'papel' && escolhaComputador === 'tesoura') {
        return 0
    } else if (escolhaJogador === 'tesoura' && escolhaComputador === 'pedra') {
        return 0
    }  else if (escolhaJogador === 'tesoura' && escolhaComputador === 'papel') {
        return 1
    }
}

pedra.addEventListener('click', function() {
    pedra.style.border = '2px solid #62CFD6'
    pedra.style.filter = 'brightness(90%)'

    aEscolhaDoUsuario('pedra')

    setTimeout(() => {
        pedra.style.border = '1px solid #fff'
        pedra.style.filter = 'brightness(100%)'
    }, 500)

})

papel.addEventListener('click', function() {
    papel.style.border = '2px solid #62CFD6'
    papel.style.filter = 'brightness(90%)'

    aEscolhaDoUsuario('papel')

    setTimeout(() => {
        papel.style.border = '1px solid #fff'
        papel.style.filter = 'brightness(100%)'
    }, 500)
})

tesoura.addEventListener('click', function() {
    tesoura.style.border = '2px solid #62CFD6'
    tesoura.style.filter = 'brightness(90%)'

    aEscolhaDoUsuario('tesoura')
    setTimeout(() => {
        tesoura.style.border = '1px solid #fff'
        tesoura.style.filter = 'brightness(100%)'
    }, 500)
})