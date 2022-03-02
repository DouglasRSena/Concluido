function mostra(texto){
    document.write("<big>" + texto + "</big>");
    pulaLinha(1);
}

function pulaLinha(numLinhas){
    for(repeat1=1; repeat1<=numLinhas; repeat1++){
        document.write("<br>");
    }
}

for(linha=1; linha<=3; linha++){
    for(coluna=1; coluna <=10; coluna++){
        document.write("*")
    }
    document.write("<br>")
}
