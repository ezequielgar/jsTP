// Producto
// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Productos {
  constructor(codigo, nombre, precio) {
    this.codigoProd = codigo;
    this.nombProd = nombre;
    this.precioProd = precio;
  }

  imprimeDatos() {
    document.write(`<br>Codigo del Producto: ${this.codigoProd}
        <br>Nombre del Producto: ${this.nombProd} <br>Precio del Producto: ${this.precioProd}`);
  }
}

let camisa = new Productos('001','Camisa Lacoste blanca','$9000');
let zapatillas = new Productos('002','Zapatillas Converse All Star','$5000');
let gorra = new Productos('001','Gorra Trucker Negra','$1000');

let stockProductos = [];
stockProductos.push(camisa);
stockProductos.push(zapatillas);
stockProductos.push(gorra);

camisa.imprimeDatos();
gorra.imprimeDatos();
zapatillas.imprimeDatos();