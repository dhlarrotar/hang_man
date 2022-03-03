var bienvenida = document.querySelector("#area-inicio");
var areaJuego=document.querySelector("#area-juego");
var iniciarJuego = document.querySelector("#iniciar");		


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
            this.classList.add("fadeOut")
            compararLetra(letter)

        });
    
    }
}


iniciarJuego.addEventListener("click", function(){
    borrarBienvenida();
    dibujarTablero();
    mostrarLineas();
    palabraEscogida=escogerPalabra();
    letter=crearTeclado();
});


