
var a=[]
var i=0
var aciertos=0
var ayuda=document.getElementById("texto-ayuda")

function escogerPalabra(){
    var palabrasDict = {
        "elefante": "animal con trompa",
        "jirafa": "animal con cuello largo",
        "murcielago": "ratón con alas"
    }
    listaPalabras=Object.keys(palabrasDict);
    listaValores=Object.values(palabrasDict);
    indice=Math.round(Math.random()*2); 
    palabraEscogida=listaPalabras[indice];
    ayudaPalabra=listaValores[indice];
    ayuda.textContent= ayudaPalabra;
    return palabraEscogida
}


function mostrarLineas(){
    palabraEscogida=escogerPalabra();
    var areaPalabra=document.querySelector(".area-palabra")
    for (let letter of palabraEscogida){
        var letraDiv = document.createElement("div");
        var linea = document.createElement("div");  
        var letra= document.createElement("p");
        letra.setAttribute("id", "letra-"+letter.toUpperCase()); 
        letraDiv.classList.add("area-letra");
        linea.classList.add("linea")
        letra.classList.add("letra")
        letraDiv.appendChild(letra)
        letraDiv.appendChild(linea)
        areaPalabra.appendChild(letraDiv);

    }  
    return palabraEscogida
}







function compararLetra(letra){
   
    var letraPalabra = document.querySelectorAll("#letra-"+letra);
    
    if(i==5){
        var times=0
        var idVar= setInterval(function(){
            hasPerdido();
            times++;
            if (times==100){
                clearInterval(idVar)
            }        
        },5)
        
    }

    else{
        
        if(palabraEscogida.length-1==aciertos && i<5){
            teclado.innerHTML="";
            areaPalabra.innerHTML="¡Ganaste! La palabra secreta es "+palabraEscogida.toUpperCase();
            

        }
        else{
            if (letraPalabra.length==0){
                if(!a.includes(letra)){
                    i++
                    a.push(letra)
                    dibujarPartes(i-1,155,70,10,"white")
                }
                else{
                    console.log("repetido")
                }
            }
            else {
                
                    for(let b of letraPalabra){
                        b.textContent=letra
                        aciertos++
                        
                    }
                    
            } console.log("aciertos"+aciertos)
            console.log(palabraEscogida.length)
        }   console.log(i+"i")

    }
    
}

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
