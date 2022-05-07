var pantalla = document.querySelector(".dibujo");
var pincel = pantalla.getContext("2d");
var iniciarJuego = document.querySelector("#iniciar");		

function limpiarPantalla(){
    pincel.clearRect(0,0,200,250);
}

/* Gradiente de color para dibujar*/

var gradient = pincel.createLinearGradient(0, 0, pantalla.width, 0);
gradient.addColorStop("0", "#62608b");
gradient.addColorStop("0.95", "#98d7ba");


/* Función para dibujo inicial del tablero*/

function dibujarTablero(){
    limpiarPantalla();
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




