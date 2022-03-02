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

function sorteiaNumeros(qntdNumeros){
    var segredos = [];

    while(segredos.length < qntdNumeros){
        var repete = false;
        var numSorteado = (Math.random() * 10).toFixed(0);
        
        for(var posicao=0; posicao < segredos.length; posicao++){
            if(numSorteado == segredos[posicao]){
                repete = true;
                break;
            }
        }

        if(repete == false){
            segredos.push(numSorteado);
        }   
    }
    
    return segredos;
}

var achou = false;

var segredos = sorteiaNumeros(3);

var input = document.querySelector("input");
input.focus();

var button = document.querySelector("button");
button.onclick = verifica;
console.log(segredos)