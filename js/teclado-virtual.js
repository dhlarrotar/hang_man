
function crearTeclado(){
    
    var abcList ="abcdefghijklmnñopqrstuvwxyz";
    var abc= abcList.toUpperCase();
    var areaTeclado=document.querySelector("#area-teclado")
   
    /*Para cada letra de abcList crear una letra virtual*/ 
    for (let letter of abc){
        var letraDiv = document.createElement("div");
        var letra= document.createElement("p");
        letraDiv.setAttribute("id", "tecla-"+letter.toUpperCase()); 
        letra.textContent=letter; 
        letraDiv.classList.add("area-tecla");
        letra.classList.add("letra-tecla")
        letraDiv.appendChild(letra)
        areaTeclado.appendChild(letraDiv);

        /*Crear evento al hacer click en cada letra virtual*/ 
        
        ["touchstart","click"].forEach(function(e) {
            letra.addEventListener(e, function(){
                this.classList.remove("letra-tecla");
                this.classList.add("fadeOut2");
                this.textContent="-";
                compararLetra(letter); 
            });
        });
    };
}

