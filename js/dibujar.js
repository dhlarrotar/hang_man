var pantalla = document.querySelector(".dibujo");
var pincel = pantalla.getContext("2d");
var iniciarJuego = document.querySelector("#iniciar");		

function limpiarPantalla(){
    pincel.clearRect(0,0,400,250);
}

var gradient = pincel.createLinearGradient(0, 0, pantalla.width, 0);
gradient.addColorStop("0", "#0700b8");
gradient.addColorStop("0.95", "#00ff88");

function dibujarTablero(){


// Fill with gradient
    pincel.strokeStyle = gradient;
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

var radio=10;

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
    pincel.moveTo(x,y4=y+2.3*radio);
    pincel.lineTo(x-2*radio,y4-radio);

}
        

function crearBrazoIzquierdo(x,y){
        pincel.moveTo(x,y4);
        pincel.lineTo(x+2*radio,y4-radio);
}

function crearSoga(x,y){
    pincel.moveTo(155,40);
    pincel.lineTo(x,y-radio);
    pincel.stroke();
}


