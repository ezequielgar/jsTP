// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function numero(i){
    if(i%2==0){
        document.write(i + ' es un numero par')
    }else{
        document.write(i + ' es un numero impar')
    }
}
let i = parseInt(prompt ('Ingrese un nro'));
numero(i)