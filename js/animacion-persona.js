var pantalla = document.querySelector(".dibujo");
var pincel = pantalla.getContext("2d");

/*Arreglo con el orden de las partes a dibujar*/
dibujar=["crearCabeza(x,y)",
"crearCuerpo(x,y)",
"crearBrazoDerecho(x,y)",
"crearBrazoIzquierdo(x,y)",
"crearPiernaDerecha(x,y)",
"crearPiernaIzquierda(x,y)"]

/*Función para dibujar las partes de acuerdo con el orden del arreglo y el contador de errores "i" */
function dibujarPartes(i,x,y,radio, color){
    pincel.strokeStyle = gradient;
    pincel.lineJoin = "round"; 
    pincel.lineWidth = 2;
	pincel.beginPath();
    eval(dibujar[i])
    pincel.stroke();
}	


/*Función para dibujar persona completa*/

function crearPersona(x,y,radio, color){
    pincel.strokeStyle = gradient;
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




/*Animación al perder el juego*/
/* Posiciones iniciales*/
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
    areaPalabra.innerHTML="¡Has perdido! La palabra secreta era "+palabraEscogida.toUpperCase();
    ayuda.textContent= "";
    
}

