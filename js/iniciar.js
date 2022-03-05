var bienvenida = document.querySelector("#area-inicio");
var areaJuego=document.querySelector("#area-juego");
var iniciarJuego = document.querySelector("#iniciar");

var cerrar=document.querySelector("#cerrar");				
var teclado=document.getElementById("area-teclado");	
var areaPalabra=document.querySelector(".area-palabra");
var botonAyuda=document.getElementById("pista");
var areaAyuda=document.getElementById("ayuda");
var botonCerrar=document.getElementById("cerrar-ayuda");


/* Funciones para borrar imágenes de inicio y mostrar área de resultado*/

function borrarBienvenida(){
    bienvenida.classList.add("fadeOut");
    areaJuego.classList.remove("fadeOut");
}

function mostrarBienvenida(){
    bienvenida.classList.remove("fadeOut");
    areaJuego.classList.add("fadeOut");
}



function crearTeclado(){
    
    var abcList ="abcdefghijklmnñopqrstuvwxyz";
    var abc= abcList.toUpperCase();
    var areaTeclado=document.querySelector("#area-teclado")
   
    for (let letter of abc){
        var letraDiv = document.createElement("div");
        var letra= document.createElement("p");
        letraDiv.setAttribute("id", "tecla-"+letter.toUpperCase()); 
        letra.textContent=letter; 
        letraDiv.classList.add("area-tecla");
        letra.classList.add("letra-tecla")
        letraDiv.appendChild(letra)
        areaTeclado.appendChild(letraDiv);
        letraDiv.addEventListener ("click", function(){
            this.classList.add("fadeOut2")
            compararLetra(letter)

        });
    
    }
}



function iniciar(){
    teclado.innerHTML="";
    areaPalabra.innerHTML="";
    borrarBienvenida();
    limpiarPantalla()
    dibujarTablero();
    palabraEscogida=mostrarLineas();
    letter=crearTeclado();
    areaAyuda.classList.add("fadeOut");
    aciertos=0;
    a=[];
    i=0;
    ymax=130;
    ymovimiento= 70;
    aceptadosArr=[]
 
}

var reiniciar=document.querySelector("#reiniciar");
iniciarJuego.onclick=iniciar






reiniciar.addEventListener("touchstart", function(){
    iniciar();
});

reiniciar.addEventListener("click", function(){
    iniciar();
});


botonAyuda.addEventListener("touchstart", function(){
    areaAyuda.classList.remove("fadeOut");
});

botonAyuda.addEventListener("click", function(){
    areaAyuda.classList.remove("fadeOut");
});


