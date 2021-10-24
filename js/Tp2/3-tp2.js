// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let cadena = '' ;
do{

    let palabra = prompt('Ingrese una palabra');
    
    if(cadena == ''){
        cadena = cadena + palabra ;
            }
    else {
        cadena = cadena + '-' + palabra ;
    }

}
while (confirm('¿Desea continuar?'));

document.write(cadena);