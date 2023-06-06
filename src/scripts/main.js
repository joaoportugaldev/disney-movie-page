document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual === 0) {
            exibeElementosDoHeader();
        } else {
            ocultaElementosDoHeader();
        }
    })

})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}