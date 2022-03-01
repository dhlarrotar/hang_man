var pantalla = document.querySelector(".dibujo");
var pincel = pantalla.getContext("2d");
var iniciarJuego = document.querySelector("#iniciar");		

function limpiarPantalla(){
    pincel.clearRect(0,0,400,250);
}


function dibujarTablero(){
    pincel.strokeStyle = "white";
    pincel.lineJoin = "round"; 
    pincel.lineWidth = 2;
    pincel.beginPath()
    pincel.moveTo(40,245);
    pincel.lineTo(90,245);
    pincel.moveTo(65,245);
    pincel.lineTo(65,30);
    pincel.moveTo(65,60);
    pincel.lineTo(95,30);
    pincel.moveTo(65,30);
    pincel.lineTo(155,30);
    pincel.moveTo(155,30);
    pincel.lineTo(155,40);
    pincel.stroke();
	}	



function crearCabeza(x,y){
    pincel.arc(x,y,radio,0,2*Math.PI);
}

function crearCuerpo(x,y){
    pincel.moveTo(x,y2=y+radio);
    pincel.lineTo(x,y3=y2+3*radio);
}

function crearPiernaDerecha(x,y){
    pincel.moveTo(x,y3);
    pincel.lineTo(x+radio,y3+2*radio);
}
	
        

function crearPiernaIzquierda(x,y){
        pincel.moveTo(x,y3);
        pincel.lineTo(x-radio,y3+2*radio);
}
  
function crearBrazoDerecho(x,y){
    pincel.moveTo(x,y4=y+2*radio);
    pincel.lineTo(x-2*radio,y4+radio);

}
        

function crearBrazoIzquierdo(x,y){
        pincel.moveTo(x,y4);
        pincel.lineTo(x+2*radio,y4+radio);
}

function crearSoga(x,y){
    pincel.moveTo(155,40);
    pincel.lineTo(x,y-radio);
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


var ymax=170;
var ymovimiento= 5;


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
}
/*
if(){setInterval(actualizarPantalla,8)};
*/
    