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




function escogerPalabra(){
    var palabrasDict = {
        "elefante": "animal con trompa",
        "jirafa": "animal con cuello largo",
        "murcielago": "ratón con alas"
    }
    listaPalabras=Object.keys(palabrasDict);
    indice=Math.round(Math.random()*2);
    palabraEscogida=listaPalabras[indice];
    return palabraEscogida
}



function mostrarLineas(){
    a=escogerPalabra();
    var areaPalabra=document.querySelector(".area-palabra")
    for (let letter of a){
        var letraDiv = document.createElement("div");
        var linea = document.createElement("div");  
        var letra= document.createElement("p"); 
        letraDiv.classList.add("area-letra");
        linea.classList.add("linea")
        letra.classList.add("letra")
        letraDiv.appendChild(letra)
        letraDiv.appendChild(linea)
        areaPalabra.appendChild(letraDiv);
    }
}

iniciarJuego.addEventListener("click", function(){
    borrarBienvenida();
    dibujarTablero();
    mostrarLineas();
});
