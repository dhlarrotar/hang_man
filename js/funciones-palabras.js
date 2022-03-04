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


var a=[]
var i=0
var aciertos=0
function compararLetra(letra){
    
    if(i==5){setInterval(hasPerdido,10)};
    var letraPalabra = document.querySelectorAll("#letra-"+letra);
    if(palabraEscogida.length-1==aciertos){
        teclado.innerHTML="";
        areaPalabra.innerHTML="¡Ganaste! La palabra secreta es: "+palabraEscogida.toUpperCase();
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
              
                for(let a of letraPalabra){
                    a.textContent=letra
                    aciertos++
                    
                }
                
        } console.log(aciertos)
        console.log(palabraEscogida.length)
    }   
}



document.onkeydown= function(evt){
    evt = evt || window.event;
    letraOprimida=evt.key.toUpperCase();
    var letraTeclado = document.getElementById("tecla-"+letraOprimida)  
    letraTeclado.classList.add("fadeOut2");
    compararLetra(letraOprimida);
    
}
