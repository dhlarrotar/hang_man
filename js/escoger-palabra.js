palabrasUsadas=[]

var palabrasDict = {
    "elefante": "Tengo trompa, orejas grandes y colmillos",
    "jirafa": " Tengo cuello largo",
    "murcielago": "Me gustan las cuevas y la oscuridad",
    "abeja": "Me encantan las flores y produzco miel",
    "perro":"Soy el mejor amigo del hombre",
    "pulpo": "Tengo tentáculos",
    "luna":"Giro alrededor de la tierra y salgo de noche",
    "sol": "Soy la estrella mas cercana a la tierra",
    "nieve":"Caigo en invierno"

}

function escogerPalabra(){
    listaPalabras=Object.keys(palabrasDict);
    listaValores=Object.values(palabrasDict);
    indice=Math.round(Math.random()*(listaPalabras.length-1)); 
    if (!palabrasUsadas.includes(indice)){
        palabrasUsadas.push(indice);
        index= indice
    }
    else{
        index=Math.round(Math.random()*(listaPalabras.length-1)); 
    }        
    palabraEscogida=listaPalabras[index];
    ayudaPalabra=listaValores[index];
    ayuda.textContent= ayudaPalabra;
    return palabraEscogida
}


function mostrarLineas(){
    palabraEscogida=escogerPalabra();
    var areaPalabra=document.querySelector(".area-palabra")
    for (let letter of palabraEscogida){
        var letra= document.createElement("p");
        var letraDivDiv = document.createElement("div");
        var letraDiv = document.createElement("div");
        var linea = document.createElement("div");  
        letra.setAttribute("id", "letra-"+letter.toUpperCase()); 
        letraDiv.classList.add("area-letra");
        letraDivDiv.classList.add("letra-div");
        letraDivDiv.setAttribute("id", "letraDivDiv-"+letter.toUpperCase()); 
        linea.classList.add("linea")
        letra.classList.add("letra")
        letraDiv.appendChild(letra)
        letraDivDiv.appendChild(letraDiv)
        letraDivDiv.appendChild(linea)
        areaPalabra.appendChild(letraDivDiv);
    }  
    return palabraEscogida
}