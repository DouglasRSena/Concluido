function desenhaCirculo(x, y, raio, cor) {

    pincel1.fillStyle = cor;
    pincel1.beginPath();
    pincel1.arc(x, y, raio, 0, 2 * Math.PI);
    pincel1.fill();
}

function dispara(evento) {

    var x = evento.pageX - tela1.offsetLeft;
    var y = evento.pageY - tela1.offsetTop;
    var difX = x - localAlvoX;
    var difY = y - localAlvoY;

    
    if(difX > -10
        && difX < 10
            && difY > -10
                && difY < 10 ){

    alert("Acerto Mizeravi!!")
    
    }
}

function desenhaAlvo(x, y){
    desenhaCirculo(x, y, raio + 20, 'red'); // maior círculo
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red'); // menor circulo
    localAlvoX = x;
    localAlvoY = y;
}

function sorteiaPosicao(max){
    let valor = (Math.random() * max).toFixed(0);
    return valor
}

function moveAlvo(){
    pincel1.fillStyle = 'lightgray';
    pincel1.fillRect(0, 0, 600, 400);

    var localAlvoX = sorteiaPosicao(600) ;
    var localAlvoY = sorteiaPosicao(400);
    
    desenhaAlvo(localAlvoX, localAlvoY);
}

let localAlvoX;
let localAlvoY;

let tela1 = document.getElementById("canvasGame");
let pincel1 = tela1.getContext("2d");
let raio = 10;

setInterval(moveAlvo, 500)
tela1.onclick = dispara;