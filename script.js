const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')

var campoVitorioso = document.querySelector('.vitorioso')
var textoVitorioso = document.getElementById('texto-vitoria')

const campoEscolhaDoUsuario = document.querySelector('.escolha-usuario')
const campoEscolhaDoComputador = document.querySelector('.escolha-computador')

var vitoriasDoUsuario = document.getElementById('vitoria-usuario')
var vitoriasDoComputador= document.getElementById('vitoria-computador')

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
    console.log(resultado)

    if(resultado == 1) {
        vitoriasDoUsuario.innerText = vitoriasUsuario
        vitoriasUsuario += 1
        
        campoVitorioso.style.backgroundColor = '#7DFB7A'
        textoVitorioso.innerText = 'Você ganhou'

    } else if(resultado == 0) {
        vitoriasDoComputador.innerText = vitoriasComputador
        vitoriasComputador += 1

        campoVitorioso.style.backgroundColor = '#EA8F8F'
        textoVitorioso.innerText = 'Você Perdeu'
    } else {
        campoVitorioso.style.backgroundColor = '#DDD4D4'
        textoVitorioso.innerText = 'Ninguém ganhou, vocês escolheram a mesma opção'
    }
}


const resultadoJogo = (escolhaJogador, escolhaComputador) => {
    
    campoEscolhaDoUsuario.innerText = escolhaJogador
    campoEscolhaDoComputador.innerText = escolhaComputador

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
    aEscolhaDoUsuario('pedra')
})

papel.addEventListener('click', function() {
    aEscolhaDoUsuario('papel')
})

tesoura.addEventListener('click', function() {
    aEscolhaDoUsuario('tesoura')
})