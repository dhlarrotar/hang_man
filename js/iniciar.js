var bienvenida = document.querySelector("#area-inicio");
var areaJuego=document.querySelector("#area-juego");
var iniciarJuego = document.querySelector("#iniciar");
var reiniciar=document.querySelector("#reiniciar");
var cerrar=document.querySelector("#cerrar");				
var teclado=document.getElementById("area-teclado");	
var areaPalabra=document.querySelector(".area-palabra")
var botonAyuda=document.getElementById("pista")
var areaAyuda=document.getElementById("ayuda")
var botonCerrar=document.getElementById("cerrar-ayuda")

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



iniciarJuego.addEventListener("click", function(){
    teclado.innerHTML=""
    areaPalabra.innerHTML=""
    borrarBienvenida();
    limpiarPantalla()
    dibujarTablero();
    palabraEscogida=mostrarLineas();
    letter=crearTeclado()
    aciertos=0
    a=[]
    i=0
});

reiniciar.addEventListener("click", function(){
    teclado.innerHTML=""
    areaPalabra.innerHTML=""
    limpiarPantalla()
    dibujarTablero();
    palabraEscogida=mostrarLineas();
    letter=crearTeclado()
    a=[]
    i=0
    aciertos=0
});


botonAyuda.addEventListener("click", function(){
    areaAyuda.classList.remove("fadeOut");
});

botonCerrar.addEventListener("click", function(){
    areaAyuda.classList.add("fadeOut");
});