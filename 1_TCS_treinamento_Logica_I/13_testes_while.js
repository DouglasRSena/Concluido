function mostra(texto){
    document.write("<big>" + texto + "</big>");
    pulaLinha(1);
}

function pulaLinha(numLinhas){
    for(repeat1=1; repeat1<=numLinhas; repeat1++){
        document.write("<br>");
    }
}

function mostraPares(primeiroNumero, numeroFinal){
    mostra("os números pares de " + primeiroNumero + " até " + numeroFinal + " são:");

        if(primeiroNumero % 2 !== 0){
            primeiroNumero++;
        }
            
            while(primeiroNumero <= numeroFinal){
                mostra(primeiroNumero);
                primeiroNumero = primeiroNumero + 2;
            
            }

            mostra("FIM!");
}     

function mostraNumDec(numIni, numFim){
    mostra("Os números entre " + numIni + " e " + numFim + ", em ordem decrescente, São:" )
    
    while(numIni != numFim){
        mostra(numFim)
        numFim--;
    }
    
    mostra("FIM!");
}


mostraPares(30, 40);

pulaLinha(1);

mostraNumDec(0,20);

var loginCadastrado = "Douglas";
var senhaCadastrada = "123";

var loginInformado = prompt("Informe seu login");
var senhaInformada = prompt("Informe sua senha");
var tentativasLogin= 3;

while(tentativasLogin > 1 && tentativasLogin <=3){
    if(loginCadastrado == loginInformado && senhaCadastrada == senhaInformada){
        alert("Bem-vindo ao sistema " + loginInformado);
        tentativasLogin = 0;
    } else {
        alert("Login inválido. Tente novamente");
        loginInformado = prompt("Informe seu login");
        senhaInformada = prompt("Informe sua senha");
        tentativasLogin--;
    }
}

if(tentativasLogin == 1){
    alert("Seu login foi negado, tente novamente mais tarde!")
}

