// Rectángulos
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulos {
  constructor() {
    this.altura;
    this.base;
  }

  setAltura(alto) {
    this.altura = alto;
  }

  getAltura() {
    return this.altura;
  }

  setBase(base) {
    this.base = base;
  }

  getBase() {
    return this.base;
  }

  calculaSuperficie() {
    let superf = this.base * this.altura;
    return superf;
  }

  calcularPerimetro() {
    let perimet = this.base * 2 + this.altura * 2;
    return perimet;
  }
}
alert("Bienvenido");
let newRectangulo = new Rectangulos();


newRectangulo.setAltura(parseInt(prompt("Ingrese la altura")));
newRectangulo.setBase(parseInt(prompt("Ingrese la base")));

alert("la superficier es :" + newRectangulo.calculaSuperficie());
alert("el perimetro es :" + newRectangulo.calcularPerimetro());


