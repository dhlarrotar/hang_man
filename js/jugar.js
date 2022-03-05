var pantalla = document.querySelector(".dibujo");
var pincel = pantalla.getContext("2d");



function crearPartes(x,y,radio, color){
    pincel.strokeStyle = color;
    pincel.lineJoin = "round"; 
    pincel.lineWidth = 2;
	pincel.beginPath();
    crearCuerpo(x,y);
    crearBrazoDerecho(x,y);
    crearBrazoIzquierdo(x,y);
    crearPiernaDerecha(x,y);
    crearPiernaIzquierda(x,y);
    crearCabeza(x,y);
    pincel.stroke();
}	






function crearPersona(x,y,radio, color){
    pincel.strokeStyle = color;
    pincel.lineJoin = "round"; 
    pincel.lineWidth = 2;
	pincel.beginPath();
    crearCabeza(x,y);
    crearCuerpo(x,y);
    crearBrazoDerecho(x,y);
    crearBrazoIzquierdo(x,y);
    crearPiernaDerecha(x,y);
    crearPiernaIzquierda(x,y);
   
    pincel.stroke();
}	

function limpiarPantalla(){
	pincel.clearRect(0,0,400,250);
}



dibujar=["crearCabeza(x,y)",
"crearCuerpo(x,y)",
"crearBrazoDerecho(x,y)",
"crearBrazoIzquierdo(x,y)",
"crearPiernaDerecha(x,y)",
"crearPiernaIzquierda(x,y)"]


function dibujarPartes(i,x,y,radio, color){
    pincel.strokeStyle = color;
    pincel.lineJoin = "round"; 
    pincel.lineWidth = 2;
	pincel.beginPath();
    eval(dibujar[i])
    pincel.stroke();
}	


var ymax=130;
var ymovimiento= 70;

function hasPerdido(){
	if(ymovimiento==ymax) return;
    limpiarPantalla();
    dibujarTablero();
	xi = 155;
    yi =ymovimiento;
    radio=10;
	crearPersona(xi,yi,radio,"white")
    crearSoga(xi,yi);
	ymovimiento++;
    teclado.innerHTML="";
    areaPalabra.innerHTML="¡Has perdido! La palabra secreta era "+palabraEscogida.toUpperCase();;
    
}
/*
if(){setInterval(actualizarPantalla,8)};
*/

