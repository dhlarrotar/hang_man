var bienvenida = document.querySelector("#area-inicio");
var areaJuego=document.querySelector("#area-juego");
var iniciarJuego = document.querySelector("#iniciar");

var areaAyuda=document.getElementById("ayuda");
var ayuda=document.getElementById("texto-ayuda")

var areaNuevaPalabra=document.getElementById("nueva-palabra");
var inputPalabra=document.getElementById("input-palabra")

var letraxDiv=document.getElementById("letrax")

var entradaSound = document.getElementById("entrada-sound");
var victoriaSound = document.getElementById("victoria-sound");
var correctaSound = document.getElementById("correcta-sound");
var erradaSound = document.getElementById("errada-sound");
var fireworksSound = document.getElementById("fireworks-sound");
var perdidoSound = document.getElementById("perdido-sound");
var bonuSound = document.getElementById("musica-sound");




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
    teclado.innerHTML="";
    areaPalabra.innerHTML="";
    letraxDiv.innerHTML="";
    limpiarPantalla();
    areaAyuda.classList.add("fadeOut");
    pantalla.classList.remove("fadeOut")
    fireworks.classList.add("fadeOut");
    perdiste.classList.add("fadeOut");
    aplausos.classList.add("fadeOut");
    m=[];
    x=[];
    ayuda.textContent= ""


    
    aceptadosArr=[];     /* Arreglo con letras ingresadas válidas*/

    letrasFallidas=[];   /* Arreglo con letras ingresadas válidas que no pertenecen a la palabra secreta*/

    palabraFormada=[]; /*arreglo con las letras verificadas que si pertenecen a la palabra*/
    palabra=[];
    lineasPalabras=[];

    letrasPalabraFilter="";
    letrasPalabraFormadaFilter=" ";

    aciertos=0;          /* Contador de aciertos para verificar si el jugador ganó*/
    i=0;                 /* Contador de errores para seleccionar las partes del cuerpo a dibujar*/

    /* Posición inicial de animación*/
    ymax=130;
    ymovimiento= 70;


    
}



function iniciar(){
    
   
    reiniciarParametros();
    borrarBienvenida();
    dibujarTablero();
    palabraEscogida=mostrarLineas();
    letter=crearTeclado();
    aceptarTeclas(); 
    palabra=[...palabraEscogida.toUpperCase()].sort();
    entradaSound.play();
   
    
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
        iniciar()
        entradaSound.play();  
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


function mostrarAyuda(){
    areaAyuda.classList.remove("fadeOut");
}

function borrarAyuda(){
    areaAyuda.classList.add("fadeOut");
}

botonAyuda.onclick=mostrarAyuda;
areaAyuda.onclick=borrarAyuda