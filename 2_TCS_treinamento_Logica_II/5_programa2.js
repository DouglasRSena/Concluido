function desenhaQuadrado(inicioX, inicioy, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(inicioX, inicioy, 50, 50);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(inicioX, inicioy, 50, 50);

}

for(var inicioX = 0; inicioX < 600; inicioX = inicioX + 50){
    desenhaQuadrado(inicioX, 0, 'green');
    }