var letrasFallidas=[];   /* Arreglo con letras ingresadas que no pertenecen a la palabra secreta*/
var aciertos          /* Contador de aciertos para verificar si el jugador ganó*/
var i;                 /* Contador de errores para seleccionar las partes del cuerpo a dibujar*/

var fireworks = document.getElementById("fireworks");
var perdiste = document.getElementById("perdiste");

var palabra;
var palabraFormada=[];
var letrasPalabraFilter;
var letrasPalabraFormadaFilter;



function compararLetra(letra){
     /*Seleccionar todas las letras de la palabra secreta que coincidan con la letra ingresada*/
    var letraPalabra = document.querySelectorAll("#letra-"+letra);
    count=0
    for (let a of palabra){if (a==letra){count++;}
    if (count>=2){bonuSound.play();}
    }
    var correcto;
            if (letraPalabra.length==0){
                /* Si no se encuentra ninguna letra en la palabra escogida que coincida con la letra ingresada, se cuenta como error*/
                if(!letrasFallidas.includes(letra)){
                    /* Aumentar contador de errores y dibujar parte respectiva*/
                    i++
                    letrasFallidas.push(letra)
                    dibujarPartes(i-1,155,70,10,"white");
                    correcto=false;
                    erradaSound.play();
                    check()
                }
                else{
                    console.log("letra repetida")
                }
            }
            else {
                if(palabra.includes(letra)){
                /* Si se encuentran letras en la palabra escogida, mostrar letras y contar como acierto*/
                    for(let letter of letraPalabra){
                        letter.innerHTML=letra;
                        correcto=true
                        letter.classList.add("fadeOut2");
                        setTimeout(function(){letter.classList.remove("fadeOut2")},200);
                        correctaSound.play();
                        aciertos++
                        palabraFormada.push(letter.textContent) ;
                        check() 

                    }
                }
        return correcto
        
    }
    
}




function check(){
    /*Seleccionar todas las letras de la palabra secreta que coincidan con la letra ingresada*/
    if (palabra.length==0) return
    p=palabra.toString().replaceAll(",","")
    pf=palabraFormada.sort().toString().replaceAll(",","")
    letrasPalabraFilter=p.replace(/(.)(?=.*\1)/g, ""); // "abc"
    letrasPalabraFormadaFilter=pf.replace(/(.)(?=.*\1)/g, ""); // "abc"
    if(i==0 && palabraFormada.length==0)return
    if(letrasPalabraFilter==letrasPalabraFormadaFilter && i<6){
        console.log("victoria")
        /* El jugador gana si no ha perdido (i<6) y si el número de aciertos coincide con el largo de la palabra*/
        teclado.innerHTML="";
        areaPalabra.innerHTML="¡Ganaste! La palabra secreta es "+palabraEscogida.toUpperCase();
        pantalla.classList.add("fadeOut")
        aplausos.classList.remove("fadeOut");
        victoriaSound.play();
        ayuda.textContent= "";
        palabra=[];
           
    }

    if(i==6){
        /*i=6 indica que el jugador a perdido e inicia las animaciones respectivas*/
        perdiste.classList.remove("fadeOut");
        perdidoSound.play();
        teclado.innerHTML="";
        areaPalabra.innerHTML="¡Has perdido! La palabra secreta era "+palabraEscogida.toUpperCase();
        ayuda.textContent= "";
        palabra=[];
        
        var idVar= setInterval(hasPerdido,35);
    } 
}


