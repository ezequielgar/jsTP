class Persona {
  constructor(nombre, edad, dni, sexo, peso, alt, fNac) {
    this.parNombre = nombre;
    this.parEdad = edad;
    this.parDni = dni;
    this.parSexo = sexo;
    this.parPeso = peso;
    this.parAlt = alt;
    this.parFechaNac = fNac;
  }
  set NombreIn(nombre){
      this.parNombre = nombre;
  } 
  set EdadIn(edad){
      this.parEdad = edad;
  }
  set DniIn(dni){
      this.parDni = dni;
  }
  set SexoIn(sexo){
      this.parSexo = sexo;
  }
  set PesoIn(peso){
      this.parPeso = peso;
  }
  set AlturaIn(altura){
      this.parAlt = altura;
  }
  set FechaNacIn(fechaNac){
      this.parFechaNac = fechaNac ;
  }

  mostrarGeneracion() {
    if (this.parFechaNac >= 1930 && this.parFechaNac <= 1948) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la generacion "Silent Generation <i>(Los niños de la posguerra)</i>" y su rasgo caracteristico es la <i>Austeridad</i>`
      );
    } else if (this.parFechaNac >= 1949 && this.parFechaNac <= 1968) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la generacion "Baby Boom" y su rasgo caracteristico es la <i>Ambicion</i>`
      );
    } else if (this.parFechaNac >= 1969 && this.parFechaNac <= 1980) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la <i>Generacion X </i> y su rasgo caracteristico es la <i>Obsesion por el exito </i>`
      );
    } else if (this.parFechaNac >= 1981 && this.parFechaNac <= 1993) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la <i>Generacion Y, Millennials </i> y su rasgo caracteristico es la <i>Frustracion</i>`
      );
    } else {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la <i>Generacion Z </i> y su rasgo caracteristico es la <i>Irreverencia</i>`
      );
    }
  }

  esMayorDeEdad() {
    if (this.parEdad >= 18) {
      document.write(`<br>Es mayor de edad.`);
    } else {
      document.write(`<br>No es mayor de edad.`);
    }
  }
  mostrarDatos() {
    document.write(`<br> <b>DATOS DEL USUARIO </b>
    <br><ins>Nombre:</ins>${this.parNombre}
    <br><ins>Edad:</ins> ${this.parEdad} 
    <br><ins>Fecha Nacimiento:</ins> ${this.parFechaNac} 
    <br><ins>DNI:</ins> ${this.parDni} 
    <br><ins>Sexo:</ins> ${this.parSexo} 
    <br><ins>Peso:</ins> ${this.parPeso}.kg 
    <br><ins>Altura:</ins>${this.parAlt}`);
  }
}



alert('Bienvenido')
let usuario = new Persona();

usuario.NombreIn(prompt('Ingrese el nombre de usuario'));
usuario.EdadIn(parseInt(prompt('Ingrese la edad')));
usuario.DniIn(parseInt(prompt('Ingrese el DNI')));
usuario.SexoIn(prompt('Ingrese el Sexo (H o M)'));





