function mostra(texto){
    document.write("<big>" + texto + "</big>");
    pulaLinha(1);
}

function pulaLinha(numLinhas){
    for(repeat1=1; repeat1<=numLinhas; repeat1++){
        document.write("<br>");
    }
}

function comparaPts(){
    if (totalPontos < totalPontosAnoPass){
        mostra("Seu time piorou.");
        }
        else if (totalPontos > totalPontosAnoPass){
            mostra("Seu time melhorou.");
            }
            else if (totalPontos = totalPontosAnoPass){
                mostra("Seu time não mudou.");
                }
}

var vitorias = parseInt(prompt("Quantas vitórias seu time possui?"));
var empates = Number(prompt("Quantos empates seu time possui?"));
var totalPontos = (vitorias * 3) + empates;
var totalPontosAnoPass = 28;

mostra("Seu time possui " + totalPontos + " pontos." );
comparaPts();
