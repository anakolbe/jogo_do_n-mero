let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const palpites = document.querySelector('.palpites');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const baixoOuAlto = document.querySelector('.baixoOuAlto');
    const envioPalpite = document.querySelector('.envioPalpite');
    const campoPalpite = document.querySelector('.campoPalpite');
    let contagemPalpites = 1;
    let botaoReiniciar;

function verificarPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContnt = "Palpites anteriores: ";
  }

Palpites.textContent += palpitesUsuario + " ";

 if (palpiteUsuario === numeroAleatorio) {
   ultimoResultado.textContent = parabéns! Você acertou!";
     ultimoResultado.style.backgroundColor = "green";
   baixoOuAlto.textContent = "";
   finalizarjogo();
 } else if (contagemPalpites === 10) {
   ultimoResultado.textContent = "FIM DE JOGO!!!";
   baixoOuAlto.content = "";
   finalizarjogo();
 } else {
   ultimoResulatdo.textContent = "Errado";
   ultimoResultado.style.backgroundColor = "red";
   if (palpiteUsuario < numeroAleatorio) {
     baixoOuAlto.textContent = "O último palpite foi muito baixo";
   } else if (palpiteUsuario < numeroAleatorio) {
       baixoOuAlto.textContent = "O último palpite foi muito alto";
   }
 }

contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('button');
    document.body.apprendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
}


function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafoReiniciar = document.querySelectorAll('.paragrafosResultado p')
    for (const paragrafosReiniciar of paragrafosReiniciar) {
        paragrafoReiniciar.textContent = "";
    }

botaoReiniciar.parentNode.removechild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
