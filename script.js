var vitoriasUsuario = 1
var vitoriasComputador = 1
 
const pedra = document.getElementById('pedra')
pedra.addEventListener('click', function() {
    mostrarMaoSelecionadaPelosJogadores('pedra')
    verificarQuemGanhou('pedra')

})

const papel = document.getElementById('papel')
papel.addEventListener('click', function() {
    mostrarMaoSelecionadaPelosJogadores('papel')
    verificarQuemGanhou('papel')

})

const tesoura = document.getElementById('tesoura')
tesoura.addEventListener('click', function() {
    mostrarMaoSelecionadaPelosJogadores('tesoura')
    verificarQuemGanhou('tesoura')

})

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

const mostrarMaoSelecionadaPelosJogadores = (maoSelecionadaPeloUsuario) => {

    const escolhaUsuario = document.querySelector('.escolha-usuario')
    const escolhaComputador = document.querySelector('.escolha-computador')
    const masSelecionadaPeloComputador = aEscolhaDoComputador()

    escolhaUsuario.innerText = maoSelecionadaPeloUsuario
    escolhaComputador.innerText = masSelecionadaPeloComputador

}

const verificarQuemGanhou = (maoSelecionadaPeloUsuario) => {

    const masSelecionadaPeloComputador = aEscolhaDoComputador()
    const resultado = resultaDoJogo(maoSelecionadaPeloUsuario, masSelecionadaPeloComputador)

    const textoVitorioso = document.querySelector('.texto-vitoria')
    const corDoVitorioso = document.querySelector('.vitorioso')

    const vitoriasDoUsuario = document.getElementById('vitoria-usuario')
    const vitoriasDoComputador= document.getElementById('vitoria-computador')

    const quadradoDaEscolha = document.querySelector('.escolhas')
    quadradoDaEscolha.style.opacity = 1

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

const resultaDoJogo = (escolhaJogador, escolhaComputador) => {
    
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