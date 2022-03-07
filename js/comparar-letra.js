var letrasFallidas=[];   /* Arreglo con letras ingresadas que no pertenecen a la palabra secreta*/
var aciertos=0;          /* Contador de aciertos para verificar si el jugador ganó*/
var i=0;                 /* Contador de errores para seleccionar las partes del cuerpo a dibujar*/

var fireworks = document.getElementById("fireworks");
var perdiste = document.getElementById("perdiste");


function compararLetra(letra){
     /*Seleccionar todas las letras de la palabra secreta que coincidan con la letra ingresada*/
    var letraPalabra = document.querySelectorAll("#letra-"+letra);
    
    if(i==5){
        var times=0
        /*i=5 indica que el jugador a perdido e inicia las animaciones respectivas*/
        perdiste.classList.remove("fadeOut");
        var idVar= setInterval(function(){
            hasPerdido();
            times++;
            if (times==100){clearInterval(idVar)}},5);      
    }
    else{  
        if(palabraEscogida.length-1==aciertos && i<5){
            /* El jugador gana si no ha perdido (i<5) y si el número de aciertos coincide con el largo de la palabra*/
            teclado.innerHTML="";
            
            areaPalabra.innerHTML="¡Ganaste! La palabra secreta es "+palabraEscogida.toUpperCase();
            pantalla.classList.add("fadeOut")
            fireworks.classList.remove("fadeOut");

            ayuda.textContent= "";

        }
        else{
            if (letraPalabra.length==0){
                /* Si no se encuentra ninguna letra en la palabra escogida que coincida con la letra ingresada, se cuenta como error*/
                if(!letrasFallidas.includes(letra)){
                    /* Aumentar contador de errores y dibujar parte respectiva*/
                    i++
                    letrasFallidas.push(letra)
                    dibujarPartes(i-1,155,70,10,"white")
                }
                else{
                    console.log("letra repetida")
                }
            }
            else {
                /* Si se encuentran letras en la palabra escogida, mostrar letras y contar como acierto*/
                    for(let letter of letraPalabra){
                        letter.textContent=letra
                        aciertos++        
                    }
                    
            }    
        }  

    }
    
}

