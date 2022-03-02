let cor = document.querySelector("input");
let tela1 = document.getElementById("canvasGame");
let pincel1 = tela1.getContext("2d");


let raioCirculo = 10;
let mouseClique = false;

function desenhaCirculo(evento){
    let positionMouseX = evento.pageX - tela1.offsetLeft;
    let positionMouseY = evento.pageY - tela1.offsetTop;

    if(mouseClique){

        pincel1.fillStyle = cor.value;
        pincel1.beginPath();
        pincel1.arc(positionMouseX, positionMouseY, raioCirculo, 0, 2 * Math.PI)
        pincel1.fill()
        
    }   
}

pincel1.fillStyle = "lightgrey";
pincel1.fillRect (0, 0, 600, 400);

tela1.onmousemove = desenhaCirculo;

tela1.onmousedown = function(){
    mouseClique=true
}

tela1.onmouseup = function(){
    mouseClique=false
}