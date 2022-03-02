let tela1 = document.getElementById("canvasGame");
let pincel1 = tela1.getContext("2d");

function desenhaCirculo(x, y, raio){
    pincel1.fillStyle = "orange";
    pincel1.beginPath();
    pincel1.arc(x, y, raio, 0, 2 * Math.PI);
    pincel1.fill();
}

function limpaTela(){
    pincel1.clearRect(0, 0, 600, 400);
}

var x=10;
var y=10;

//var move = 1;
var raio = 10;
var taxaPulso = 1;

function criaAlvo(){
    limpaTela();
    desenhaCirculo(x, y, raio);
/*
    x= x + move;
    if(x == 590){
        move = -1;
    }
    if(x == 10){
        move = 1;
    }
*/
    raio = raio + taxaPulso;

    if(raio == 20){
        taxaPulso = -1;
    }
    if(raio == 10){
        taxaPulso = 1;
    }

}

document.onkeydown = leDoTeclado;
function leDoTeclado(evento){
    if(evento.key == "ArrowUp"){
        y = y - 10;
        }else if(evento.key == "ArrowRight"){
            x = x + 10;
            }else if(evento.key == "ArrowLeft"){
                x = x - 10;
                }else if(evento.key == "ArrowDown"){
                    y = y + 10; 
    }
}
/*
    KeyboardEvent {isTrusted: true, key: 'ArrowUp', code: 'ArrowUp', location: 0, ctrlKey: false, …}
10_programa4.js:41 KeyboardEvent {isTrusted: true, key: 'ArrowRight', code: 'ArrowRight', location: 0, ctrlKey: false, …}
10_programa4.js:41 KeyboardEvent {isTrusted: true, key: 'ArrowLeft', code: 'ArrowLeft', location: 0, ctrlKey: false, …}
10_programa4.js:41 KeyboardEvent {isTrusted: true, key: 'ArrowDown', code: 'ArrowDown', location: 0, ctrlKey: false, …}
}
*/


setInterval(criaAlvo, 20);