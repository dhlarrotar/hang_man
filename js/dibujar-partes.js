/* Funciones para dibujar cada parte del cuerpo con respecto al radio de la cabeza*/

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



