function mostra(texto){
    document.write("<big>" + texto + "</big>")
    pulaLinha(2)
}

function pulaLinha(numLinhas){
    for(repeat1=1; repeat1<=numLinhas; repeat1++){
        document.write("<br>")
    }
}

function calcTab (numeroTab){
    while(numeroTab<=10){

        document.write("Tabuada do " + numeroTab + ":");
        pulaLinha(1)

            for(multiplicador=1; multiplicador<11; multiplicador++){
                document.write(numeroTab + " x " + multiplicador + " = " + (numeroTab*multiplicador))
                pulaLinha(1)
            }

        pulaLinha(1)
        numeroTab++
    }
}

let idadeDouglas = 25;
let idadeParente = 21;
let anoAtual= 2021;
let idadeMediaParaTerFilhos= 28;
let quantidadeGeracoes= Math.round((anoAtual-1500)/idadeMediaParaTerFilhos);

mostra("A diferença de idade entre Douglas e seu parente é de: "  +  (idadeDouglas - idadeParente) + " anos." );
mostra("Se uma nova geração surge a cada " + idadeMediaParaTerFilhos+ " anos, desde 1500 surgiram " + quantidadeGeracoes + " gerações.");
calcTab(1);

