
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


// cadena = [] ;
// ciudad = 0;
// ciudad = prompt('Ingrese una ciudad (ingrese 0 para cancelar):');
// while (ciudad != 0 && confirm('Desea continuar?'))


// {
//     cadena.push(ciudad);
//     cadena.length;
//     cadena[0];
//     if (cadena.lenght >= 3){
//         cadena[3];
//     }
//     cadena[cadena.lenght - 1];

//     cadena[cadena.lenght - 1] = "París";

// }
// document.write(cadena);

cadena = [];
ciudad = 0;
do {
    ciudad = prompt('Ingrese una ciudad');
    console.log(ciudad);
    if (cadena == '') {
        cadena = cadena + ciudad ;
        console.log(ciudad);
        
    } else {
        cadena = cadena + '<br>' + ciudad ;
    }
   

} while (ciudad != 0 &&  confirm('Desea continuar?'));
document.write(cadena);
document.write('<br> La longitud del arreglo es de ' + cadena.length);

