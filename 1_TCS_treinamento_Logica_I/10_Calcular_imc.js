function mostra(texto){
    document.write("<big>" + texto + "</big>");
    pulaLinha(1);
}

function pulaLinha(numLinhas){
    for(repeat1=1; repeat1<=numLinhas; repeat1++){
        document.write("<br>");
    }
}

function calculaImcComNome(nome, altura, peso){
    let imc = (peso / (altura * altura));
    mostra("o IMC do " + nome + " é " + imc.toFixed(2) + " kg/m2.");
}

function calculaImc(altura, peso){
    return peso / (altura * altura);
}

// calculaImc com 3 Parametros (nome, altura, peso);
calculaImcComNome("Douglas", 1.80, 100);
calculaImcComNome("Arnaldo", 1.50, 70);
calculaImcComNome("Patrícia", 1.60, 58);

pulaLinha(3)

// calculaImc com valores fornecidos no prompt
let nomeUsuario = prompt("Informe seu nome")
let alturaUsuario = prompt(nomeUsuario + ", qual sua altura?");
let pesoUsuario = prompt(nomeUsuario + ", qual seu peso?"); 
let imcUsuario = calculaImc(alturaUsuario, pesoUsuario);
mostra(nomeUsuario + " seu IMC é " + imcUsuario.toFixed(2) + " kg/m2.");