var bienvenida = document.querySelector("#area-inicio");
var areaJuego=document.querySelector("#area-juego");
var iniciarJuego = document.querySelector("#iniciar");

var cerrar=document.querySelector("#cerrar");				
var teclado=document.getElementById("area-teclado");	
var areaPalabra=document.querySelector(".area-palabra");
var botonAyuda=document.getElementById("pista");
var areaAyuda=document.getElementById("ayuda");
var botonCerrar=document.getElementById("cerrar-ayuda");
var areaNuevaPalabra=document.getElementById("nueva-palabra");
var botonPalabra=document.getElementById("agregar-palabra");
var inputPalabra=document.getElementById("input-palabra")
var agregar=document.getElementById("agregar")

var aceptadosArr=[]

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

        
    document.onkeydown= function(evt){
        evt = evt || window.event;
        letraOprimida=evt.key;
        var patronAceptados = /[a-zA-Z]/gi;
        var aceptados1=new Set(letraOprimida.match(patronAceptados));
        var aceptados=[...aceptados1]
        if(!aceptadosArr.includes(aceptados.toString())){
            aceptadosArr.push(letraOprimida)
            if (aceptados.length==1){
                console.log(aceptados)
                var letraTeclado = document.getElementById("tecla-"+aceptados.toString().toUpperCase())  
                if (letraTeclado){letraTeclado.classList.add("fadeOut2")};
                compararLetra(aceptados.toString().toUpperCase());
            }
        }    

    }




 
}


iniciarJuego.onclick=iniciar
var reload=document.getElementById("reload");





["touchstart","click"].forEach(function(e) {
    reload.addEventListener(e, function(){
        iniciar();
        
    });
})


botonAyuda.addEventListener("touchstart", function(event){
    event.preventDefault();
    areaAyuda.classList.remove("fadeOut");
});

botonAyuda.addEventListener("click", function(event){
    event.preventDefault();
    areaAyuda.classList.remove("fadeOut");
});


botonPalabra.addEventListener("click", function(event){
    event.preventDefault();
    areaNuevaPalabra.classList.remove("fadeOut");
});

agregar.addEventListener("click", function(event){
    event.preventDefault();
    a
    areaNuevaPalabra.classList.add("fadeOut");
    palabraNueva=inputPalabra.value;
    palabrasDict[palabraNueva]="";
    inputPalabra.value=""
});


var home=document.getElementById("home");
home.onclick=mostrarBienvenida;