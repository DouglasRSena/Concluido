var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaEsquadro(inicioX, inicioY, fimX, fimY, cor) {
    pincel.fillStyle = cor
    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX, fimY);
    pincel.lineTo(fimX, fimY);
    pincel.fill();

    pincel.fillStyle = 'white'
    pincel.beginPath();
    pincel.moveTo((6*inicioX + fimX)/7, (9*inicioY + 5*fimY)/14);
    pincel.lineTo((6*inicioX + fimX)/7, (inicioY + 6*fimY)/7);
    pincel.lineTo((5*inicioX + 9*fimX)/14, (inicioY + 6*fimY)/7);
    pincel.fill();

}

desenhaEsquadro(50, 50, 400, 400, 'red');