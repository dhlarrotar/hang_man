var teclado=document.getElementById("area-teclado");	
var areaPalabra=document.querySelector(".area-palabra");

var aceptadosArr=[]; /* Arreglo con letras ingresadas válidas*/

/* Función para verificar que la letra ingresada por el teclado sea una letra válida sin repetir*/




function verificarValores(texto){
    var patronAceptados = /[a-zA-Z\s]/gi;
    var patronRechazados = /[^a-zA-Z\s]/gi;
    var aceptados=texto.match(patronAceptados);
    var rechazados1=new Set(texto.match(patronRechazados));
    var rechazados=[...rechazados1]
    if (rechazados.length!=0){
        mensajeError.textContent="⚠   Los siguientes caracteres son inválidos y serán ignorados: "+rechazados;
    }
    else{
        mensajeError.textContent=""
    }
    if (aceptados){
        return aceptados.toString().replaceAll(",","");
    }   
}












function verificarTeclaOprimida(evt){
    letraOprimida=evt.key;
    var patronAceptados = /[a-zA-Z]/gi;
    var aceptados1=new Set(letraOprimida.match(patronAceptados));
    var aceptados=[...aceptados1]
    
    if(!aceptadosArr.includes(aceptados.toString())){
        if (palabra.length==0) return
        aceptadosArr.push(letraOprimida);
        if (aceptados.length==1){
            var letraTeclado = document.getElementById("tecla-"+aceptados.toString().toUpperCase());
            correcto=compararLetra(aceptados.toString().toUpperCase());
            if (letraTeclado){
                letraTeclado.classList.remove("letra-tecla");
                if (correcto){          
                    letraTeclado.classList.add("fadeOut2");
                    correctaSound.play();
                    
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
        evt = evt || window.event;
        verificarTeclaOprimida(evt);
        check();
    }
}
