// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let nota;

do{
    nota = parseInt(prompt("Ingrese una calificaicon del 0 al 10"));
    console.log(nota);
    //verificar si la nota es un numero y ademas  esta entre 0 y 10
    if (!isNaN(nota) && nota > 0 && nota <= 10){
        
    }    
}
