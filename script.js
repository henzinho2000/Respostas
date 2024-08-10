const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");
var taTocando = false;

botaoPlayPause.addEventListener("click", taOuNao);
//PLAY//
function tocarFaixa(){
    audio.play();
    botaoPlayPause.classList.remove("bi-play-circle");
    botaoPlayPause.classList.add("bi-pause-circle");
    taTocando = true;
}

//PAUSE//
function pausarFaixa(){
    audio.pause();
    botaoPlayPause.classList.add("bi-play-circle");
    botaoPlayPause.classList.remove("bi-pause-circle");
    taTocando = false;
}

//VERIFICA SE ESTA PAUSADO OU NÃO//
function taOuNao(){
    if(taTocando === true){
        pausarFaixa();
    }
    else{
        tocarFaixa();
    }
}