var bienvenida = document.querySelector("#area-inicio");
var areaJuego=document.querySelector("#area-juego");
var iniciarJuego = document.querySelector("#iniciar");

var html = document.querySelector("html");

var areaModo=document.getElementById("modo");
var minerales=document.getElementById("minerals");
var animales=document.getElementById("animals");
var aleatorio=document.getElementById("random");

var mensajeError = document.querySelector("#error");

var areaAyuda=document.getElementById("ayuda");
var ayuda=document.getElementById("texto-ayuda")
var cuentaAyuda=document.getElementById("cuenta-ayudas");

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

var ayudasDisponibles=3;
var ayudasDisponiblesText = document.getElementById("ayudasDisponibles");
var tpista = document.getElementById("tpista");
ayudasDisponiblesText.textContent=ayudasDisponibles;




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


    botonAyuda.classList.remove("fadeOut");
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
    
    entradaSound.play();
    reiniciarParametros();
    borrarBienvenida();
    dibujarTablero();
    palabraEscogida=mostrarLineas();
    letter=crearTeclado();
    aceptarTeclas(); 
    palabra=[...palabraEscogida.toUpperCase()].sort();

    if(ayudasDisponibles==0){
        botonAyuda.src= "img/hint2.png";
        tpista.innerHTML="";
    }
    
    botonAyuda.addEventListener('click', () => {
        if(ayudasDisponibles==0) return

        ayudasDisponibles--;
        ayudasDisponiblesText.textContent=ayudasDisponibles;
      }, { once: true });

    
   
    
}


/* Agregar evento "Click" a botones del juego*/

var reload=document.getElementById("reload");
var home=document.getElementById("home");
var botonAyuda=document.getElementById("iconoAyuda")

var botonPalabra=document.getElementById("agregar-palabra");
var agregar=document.getElementById("agregar")


home.onclick=mostrarBienvenida;



["touchstart","click"].forEach(function(e) {
    reload.addEventListener(e, function(evt){
        evt.preventDefault();
        iniciar()
    });


    iniciarJuego.addEventListener(e, function(evt){
        areaModo.classList.remove("fadeOut");

    });

    minerales.addEventListener(e, function(evt){
      
        areaModo.classList.add("fadeOut");
        palabrasDict=palabrasDictMinerales;
        iniciar();
        entradaSound.play();  
    });

    animales.addEventListener(e, function(evt){

        palabrasDict=palabrasDictAnimales;
        areaModo.classList.add("fadeOut");
        iniciar();
        entradaSound.play();  
    });


    aleatorio.addEventListener(e, function(evt){
        palabrasDict=Object.assign({},palabrasDictAnimales,palabrasDictMinerales,palabrasDictOtros);
        areaModo.classList.add("fadeOut");
        iniciar();  
        entradaSound.play();
    });
    
    botonPalabra.addEventListener(e, function(evt){
        evt.preventDefault();
        areaNuevaPalabra.classList.remove("fadeOut");
    });

    inputPalabra.addEventListener(e, function(){
        areaNuevaPalabra.classList.remove("fadeOut");
    });

    
    agregar.addEventListener(e, function(evt){
        evt.preventDefault();
        areaNuevaPalabra.classList.add("fadeOut");
        palabrasDictOtros[palabraVerificada]="";
        inputPalabra.value="";
        mensajeError.textContent="";
    });

 
})


inputPalabra.addEventListener("input", function() {
    var texto=inputPalabra.value;
    if (texto.length!=0){
        palabraVerificada=verificarValores(texto);
    }
    else{
        mensajeError.textContent="";
    }
});



function mostrarAyuda(){
    if(ayudasDisponibles==0) return
    areaAyuda.classList.remove("fadeOut");
    areaJuego.classList.add("fadeOut");
}

function borrarAyuda(){
    areaAyuda.classList.add("fadeOut");
    areaJuego.classList.remove("fadeOut");
}

botonAyuda.onclick=mostrarAyuda;
areaAyuda.onclick=borrarAyuda;

