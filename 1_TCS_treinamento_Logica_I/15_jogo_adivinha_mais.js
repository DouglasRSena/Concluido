function verifica(){

    for(var posicao = 0; posicao < segredos.length; posicao++) {
    
        if(input.value == segredos[posicao]) {
    
            alert("acertou o valor era: " + segredos);
            achou = true;
            break;
            }
        }
    
    if(achou == false) {
        alert("errou, o valor era: " + segredos);
        }
    
    input.value = "";
    input.focus();
}

var achou = false;
var segredos = [5,7,10,2,3];
var input = document.querySelector("input");
input.focus();

var button = document.querySelector("button");

button.onclick = verifica;