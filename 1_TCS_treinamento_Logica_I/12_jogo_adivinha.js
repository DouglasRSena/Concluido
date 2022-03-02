function mostra(texto){
    document.write("<big>" + texto + "</big>");
    pulaLinha(1);
}

function pulaLinha(numLinhas){
    for(repeat1=1; repeat1<=numLinhas; repeat1++){
        document.write("<br>");
    }
}

let numeroPensado = (Math.random() * 10).toFixed(0);
let tentativa = 1

while(tentativa < 4){
    let chute = parseInt(prompt("Em qual número estou pensando?"));

        if(chute == numeroPensado){
            mostra("Você ACERTOU! O número pénsado era " + numeroPensado);
            break;
            
        }else{
                mostra("Errou!");
                tentativa++;
            }
            
}


