var bienvenida = document.querySelector("#area-inicio");
var areaJuego=document.querySelector("#area-juego");
var iniciarJuego = document.querySelector("#iniciar");

var areaAyuda=document.getElementById("ayuda");
var ayuda=document.getElementById("texto-ayuda")

var areaNuevaPalabra=document.getElementById("nueva-palabra");
var inputPalabra=document.getElementById("input-palabra")





/* Funciones para borrar imágenes de inicio y mostrar área de resultado*/

function borrarBienvenida(){
    bienvenida.classList.add("fadeOut");
    areaJuego.classList.remove("fadeOut");
}

function mostrarBienvenida(){
    bienvenida.classList.remove("fadeOut");
    areaJuego.classList.add("fadeOut");
}



/* Función para reiniciar los parámetros de verificación del juego y posiciones de animación*/

function reiniciarParametros(){
    areaAyuda.classList.add("fadeOut");
    
    aceptadosArr=[];     /* Arreglo con letras ingresadas válidas*/
    
    letrasFallidas=[];   /* Arreglo con letras ingresadas válidas que no pertenecen a la palabra secreta*/

    aciertos=0;          /* Contador de aciertos para verificar si el jugador ganó*/
    i=0;                 /* Contador de errores para seleccionar las partes del cuerpo a dibujar*/

    /* Posición inicial de animación*/
    ymax=130;
    ymovimiento= 70;
    
}



function iniciar(){
    teclado.innerHTML="";
    areaPalabra.innerHTML="";
    borrarBienvenida();
    limpiarPantalla()
    dibujarTablero();
    palabraEscogida=mostrarLineas();
    letter=crearTeclado();
    aceptarTeclas(); 
    reiniciarParametros();
}


/* Agregar evento "Click" a botones del juego*/

var reload=document.getElementById("reload");
var home=document.getElementById("home");
var botonAyuda=document.getElementById("pista")

var botonPalabra=document.getElementById("agregar-palabra");
var agregar=document.getElementById("agregar")

iniciarJuego.onclick=iniciar;

home.onclick=mostrarBienvenida;



["touchstart","click"].forEach(function(e) {
    reload.addEventListener(e, function(){
        iniciar();  
    });

    botonAyuda.addEventListener(e, function(){
        areaAyuda.classList.remove("fadeOut");
    });

    botonPalabra.addEventListener(e, function(){
        areaNuevaPalabra.classList.remove("fadeOut");
    });
    
    agregar.addEventListener(e, function(){
        areaNuevaPalabra.classList.add("fadeOut");
        palabraNueva=inputPalabra.value;
        palabrasDict[palabraNueva]="";
        inputPalabra.value=""
    });
})




