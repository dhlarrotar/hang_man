var teclado=document.getElementById("area-teclado");	
var areaPalabra=document.querySelector(".area-palabra");

var aceptadosArr=[]; /* Arreglo con letras ingresadas válidas*/

/* Función para verificar que la letra ingresada por el teclado sea una letra válida sin repetir*/

function verificarTeclaOprimida(evt){
    letraOprimida=evt.key;
    var patronAceptados = /[a-zA-Z]/gi;
    var aceptados1=new Set(letraOprimida.match(patronAceptados));
    var aceptados=[...aceptados1]
    
    if(!aceptadosArr.includes(aceptados.toString())){
        aceptadosArr.push(letraOprimida);
        if (aceptados.length==1){
            var letraTeclado = document.getElementById("tecla-"+aceptados.toString().toUpperCase());
            correcto=compararLetra(aceptados.toString().toUpperCase());
            if (letraTeclado){
                letraTeclado.classList.remove("letra-tecla");
                if (correcto){          
                    letraTeclado.classList.add("fadeOut2");
                    
                }
                else{
                    letraTeclado.classList.add("fadeOutBad")
                    
                }
            };   

        }
    }    
}


/* Función para aceptar las letras ingresadas que cumplan las condiciones*/

function aceptarTeclas(){
    document.onkeydown= function(evt){
        if(evt.handled === false) return
        evt.stopPropagation();
        evt.preventDefault();
        evt.handled = true;
        evt = evt || window.event;
        letra=verificarTeclaOprimida(evt);
        check();
    }
}
