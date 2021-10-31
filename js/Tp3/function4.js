// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tabla(i){
    for (let valor = 1 ; valor <= 10; valor++) {
        
        document.write (valor + 'x'+ i + '=' +i* valor + '<br>')
    }
}

let i=parseInt(prompt('ingrese un numero'))
tabla(i)