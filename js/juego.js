b="elefante";
var a=[...b]

function crearLetra(a){
    var areaPalabra=document.querySelector(".area-palabra")
    for (let letter of a){
        var letraDiv = document.createElement("div");
        var linea = document.createElement("div");  
        var letra= document.createElement("p");
        letra.textContent=letter;  
        letraDiv.classList.add("area-letra");
        linea.classList.add("linea")
        letra.classList.add("letra")
        letraDiv.appendChild(letra)
        letraDiv.appendChild(linea)
        areaPalabra.appendChild(letraDiv);
    }
}
