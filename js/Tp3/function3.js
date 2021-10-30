// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

function perimetro( p){
    document.write ('El perimetro es: '+p)
}
let a= parseInt( prompt('ingrese el valor de a'))
let b= parseInt( prompt('ingrese el valor de b'))
let p = 2*(a + b)
perimetro(p)