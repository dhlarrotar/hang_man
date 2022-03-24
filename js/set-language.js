var dataen = {
    "titulo":"&iexcl;Hang Man&#33;",
    "modotext":"Select a game mode",
    "minerals":"Minerals",
    "animals":"Animals",
    "random":"Random",
    "iniciar":"Start game",
    "agregar-palabra":"Add word",
    "agregar":"Add",
    "hometext":"Home",
    "reloadtext":"Start over",
    "tpista":"Hint",
    "cerrar-ayuda":"Click to close",
}

var dataes = {
    "titulo":"&iexcl;Ahorcado&#33;",
    "modotext":"Escoge un modo de juego",
    "minerals":"Minerales",
    "animals":"Animales",
    "random":"Aleatorio",
    "iniciar":"Iniciar Juego",
    "agregar-palabra":"Agregar palabra",
    "agregar":"Agregar",
    "hometext":"Menú",
    "reloadtext":"Reiniciar",
    "tpista":"Pedir una pista",
    "cerrar-ayuda":"Has click para cerrar"
}

var langDict=dataen;
var langList=document.querySelector(".lang-list")
var ganasteText;
var perdisteText;
var errorText;


setLanguage()

if(window.location.hash){
    langList.value=window.location.hash.replace("#","");
    setLanguage();
}




function mostrarTexto(langDict){
    langDictKeys=Object.keys(langDict);
    for(let element of langDictKeys){
        var elementObject=document.getElementById(element);
        if(elementObject){
            elementObject.innerHTML=langDict[element];
        }
    }
}


function setLanguage(){
    lang=langList.value; 
    document.getElementsByTagName('html')[0].setAttribute('lang',lang);
    datadefault=dataen;
    langDict=eval("data"+lang);
    window.location.hash="#"+lang;
    mostrarTexto(langDict);
    if(langDict==dataes){
        ganasteText="¡Ganaste!<br>La palabra secreta es ";
        perdisteText="<br>¡Has perdido!<br>La palabra secreta era ";
        errorText="⚠   Los siguientes caracteres son inválidos y serán ignorados: "
        palabrasDictMinerales=palabrasDictMineralesEs;
        palabrasDictAnimales=palabrasDictAnimalesEs; 
        palabrasDictOtros=palabrasDictOtrosEs;
    }

    if(langDict==dataen){
        ganasteText="Congrats!<br> The secret word is ";
        perdisteText="<br>Game Over! <br> The secret word was ";
        errorText="⚠   These characters are invalid and will be ignored: "
        palabrasDictMinerales=palabrasDictMinerals;
        palabrasDictAnimales=palabrasDictAnimals; 
        palabrasDictOtros=palabrasDictOther;
    }

    console.log(langDict);
}

langList.onchange=setLanguage;


