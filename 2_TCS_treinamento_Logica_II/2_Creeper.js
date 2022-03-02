var tela1 = document.getElementById("teste");
var pincel1 = tela1.getContext("2d");

pincel1.fillStyle = "lightgray";    
pincel1.fillRect(0,0,600,400);

//1 350, 300 (cabeça).
pincel1.fillStyle = "green";    
pincel1.fillRect(125,50,350,300);

//2 90, 90 (olhos).
pincel1.fillStyle = "black";    
pincel1.fillRect(175,105,90,90);
pincel1.fillRect(335,105,90,90);

//4 70, 100 (nariz).
pincel1.fillRect(265,195,70,100);

//5 40, 110 (parte da boca)
pincel1.fillRect(335,240,40,110);
pincel1.fillRect(225,240,40,110);