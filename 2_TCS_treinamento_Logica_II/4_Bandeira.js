var tela1 = document.querySelector('canvas');
var pincel1 = tela1.getContext('2d');

function desenhaBandeira(numeroBandeira){
    //Brasil
    if(numeroBandeira == 1){
        pincel1.fillStyle='green';
        pincel1.fillRect(0, 0, 600, 400);

        pincel1.fillStyle='yellow';
        pincel1.beginPath();
        pincel1.moveTo(300, 50);
        pincel1.lineTo(50, 200);
        pincel1.lineTo(550, 200);
        pincel1.fill();

        pincel1.beginPath();
        pincel1.moveTo(300, 350);
        pincel1.lineTo(50, 200);
        pincel1.lineTo(550, 200);
        pincel1.fill();

        pincel1.fillStyle='darkblue';
        pincel1.beginPath();
        pincel1.arc(300, 200, 100, 0, 2 * Math.PI);
        pincel1.fill();
    }
    
    //Alemanha
        if(numeroBandeira == 2){
        pincel1.fillStyle = 'black';
        pincel1.fillRect(0, 0, 600, 133);
    
        pincel1.fillStyle = 'red';
        pincel1.fillRect(0, 133, 600, 133);
    
        pincel1.fillStyle = 'yellow';
        pincel1.fillRect(0, 266, 600, 133);
    }
}

var bandeira = 1;

function trocaBandeira(){
    if(bandeira == 1){
        bandeira = 2;
    }else{
        bandeira = 1
    }

    desenhaBandeira(bandeira);
}

desenhaBandeira(1)
setInterval(trocaBandeira, 300)