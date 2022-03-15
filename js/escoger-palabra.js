palabrasUsadas=[]
lineasPalabra=[]

var palabrasDictMinerales = {
    "Cuarzo": "Soy resistente y abundante",
    "Calcita": "Soy un Carbonato de Calcio muy estable",
    "Diamante": "Puedo ser de carbono pero soy muy valioso",
    "Olivino": "Nací en lo profundo y me altero fácilmente",
}

var palabrasDictAnimales = {
    "elefante": "Tengo trompa, orejas grandes y colmillos",
    "jirafa": " Tengo cuello largo",
    "murcielago": "Me gustan las cuevas y la oscuridad",
    "abeja": "Me encantan las flores y produzco miel",
    "perro":"Soy el mejor amigo del hombre",
    "pulpo": "Tengo tentáculos",
}

var palabrasDictOtros = {
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
var lineasPalabras;
var x;

function mostrarLineas(){
    palabraEscogida=escogerPalabra();
    var areaPalabra=document.querySelector(".area-palabra")
    var letraxDiv=document.getElementById("letrax")
    var areaInicio=document.querySelector("#area-inicio")
    for (let letra of palabraEscogida){
        lineasPalabras.push("_")
    }

    for (let letter of palabraEscogida){
        var letra= document.createElement("p");
        letra.setAttribute("id", "letra-"+letter.toUpperCase());
        letra.textContent="_" 
        letra.classList.add("letrax")
        letraxDiv.appendChild(letra);
    }

    var letrax=document.querySelectorAll(".letrax")
    for (let element of letrax){
        x.push(element.textContent);
    }
    
    areaPalabra.innerHTML=x.toString().replaceAll(",", " ");
    console.log(lineasPalabra)
    return palabraEscogida
}



/*
for (let letter of palabraEscogida){

    }  */ 