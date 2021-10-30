// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function texto(frase){
    if(frase==frase.toLowerCase()) {
        document.write('Cadena de texto solo en minuscula')
    }else if (frase == frase.toUpperCase()){
        document.write('Cadena de texto solo en Mayusculas')
    } else{
        document.write('Cadena de texto en Mayusculs y Minusculas')
    }
}
let frase = prompt('Ingrese una frase');
texto(frase)