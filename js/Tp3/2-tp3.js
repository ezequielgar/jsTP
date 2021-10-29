
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

cadena = [];
ciudad = 0;
do {
    ciudad = prompt('Ingrese una ciudad');
    if( ciudad == '' || ciudad == 0){
        alert('se finaliza programa');

    }else{

        console.log(ciudad);
        cadena.push(ciudad);
    }
  
} while (ciudad != 0 && confirm('Desea continuar?'));
document.write(cadena);
// Mostrar la longitud del arreglo.
document.write('<br><b>La longitud del arreglo es de : </b>' + cadena.length);
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write('<br><b>Primera ciudad: </b>' + cadena[0]);
document.write('<br><b>Tercera ciudad: </b>' + cadena[2]);
document.write('<br><b>Ultima ciudad: </b>' + cadena[cadena.length -1]);
// Añade en última posición la ciudad de París.
cadena.push('Paris');
document.write('<br><b>Ultima ciudad nueva: </b>' + cadena[cadena.length -1]);
// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write('<br><b>Segunda ciudad: </b>' + cadena[1]);
console.log('<br><b>Segunda ciudad: </b>' + cadena[1]);
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
cadena.splice(1,0,'Barcelona');
document.write('<br><b>Segunda ciudad: </b>' + cadena[1]);
console.log('<br><b>Segunda ciudad: </b>' + cadena[1]);
document.write('<br><b>Nuevo array : </b>' + cadena);



