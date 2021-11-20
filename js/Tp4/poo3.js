// Rectángulos
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulos {
  constructor(alto, ancho) {
    this.altura = alto;
    this.base = ancho;
  }



  calculaSuperficie(superf){
      superf = this.base * this.altura ;
      console.log('La superficie es : ' + superf);
      
  }

  calcularPerimetro(perimet){
      perimet = this.base*2 + this.altura*2 ;
      console.log('El perimetro es : ' + perimet);
  }

  

}
alert('Bienvenido');
let newRectangulo = new Rectangulos();

this.altura = parseInt( prompt('Ingrese la altura'));
console.log(this.altura);
this.base = parseInt(prompt('Ingresa la  base'))
console.log(this.base);

newRectangulo.calculaSuperficie();
newRectangulo.calcularPerimetro();


// falta terminar de resolver como ingresar base y altura para tomar estos datos y volcarlos en los metodos


