// Ejercicio POO 1
// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre || "Juan";
        this.edad = edad || 52;
        this.genero = genero || "Hombre"
    }
    detalles(){
        console.log(`Me llamo ${this.nombre} soy ${this.genero} y tengo ${this.edad}`);
      }
  }
  
  let yo = new Persona("Jonathan", 24, "Hombre");
  yo.detalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona { 
    constructor (nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero, curso, grupo) // Llama al constructor del padre
      this.curso = curso;
      this.grupo = grupo;
      }
      registrar(){
        console.log(`Me llamo ${this.nombre} soy ${this.genero} y tengo ${this.edad}, estoy matriculado en ${this.grupo} de ${this.curso}`);
      }
  };

  let yoEstudiante = new Estudiante("Jonathan", 24, "Hombre", "1º" ,"FS");
yoEstudiante.registrar();
// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona { 
    constructor (nombre, edad, genero, asignatura, nivel) {
      super(nombre, edad, genero, asignatura, nivel) // Llama al constructor del padre
      this.asignatura = asignatura;
      this.nivel = nivel;
      }
      asignar(){
        console.log(`Me llamo ${this.nombre} soy ${this.genero} y tengo ${this.edad}, mi Profesor me da la aignatura de ${this.asignatura} que tiene una complicacion de nivel ${this.nivel}`);
      }
  };

  let miProfesor = new Profesor("Jonathan", 24, "Hombre", "Lengua" ,"Alto");
miProfesor.asignar();

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

class ProfesorMates extends Estudiante { 
    constructor (nombre, edad, genero, curso, grupo, asignatura, nivel) {
      super(nombre, edad, genero, curso, grupo, asignatura, nivel) // Llama al constructor del padre
      this.asignatura = asignatura;
      this.nivel = nivel;
      }
      colegio(){
        console.log(`Me llamo ${this.nombre} soy ${this.genero} y tengo ${this.edad}, estoy matriculado en ${this.grupo} de ${this.curso}, mi Profesor me da la aignatura de ${this.asignatura} que tiene una complicacion de nivel ${this.nivel}`);
      }
  };

  let profesorMates = new ProfesorMates("Jonathan", 24, "Hombre", "1º" ,"Bach", "Lengua" ,"Alto");
profesorMates.colegio();
