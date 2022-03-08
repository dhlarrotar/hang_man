var a=[]
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
        letra.setAttribute("id", "tecla"+letter); 
        letraDiv.appendChild(letra)
        areaTeclado.appendChild(letraDiv);

        /*Crear evento al hacer click en cada letra virtual*/ 
       
        ["touchstart","click"].forEach(function(e) {
     
            letraDiv.addEventListener(e, function(event){
                if(event.handled === false) return
                event.stopPropagation();
                event.preventDefault();
                event.handled = true;
                this.classList.remove("letra-tecla");
                if (!a.includes(letter)){
                    a.push(letter);
                    correcto=compararLetra(letter);
                    if (correcto){
                        check()
                        this.classList.add("fadeOut2");
                        
                    }
                    else{
                        this.classList.add("fadeOutBad");
                        check()
                        
                    }
                }
                else{
                    console.log("repetido")
                }
               

                 
            });
        });
    };
}

