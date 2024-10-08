// Selecciona el contenedor donde se mostrara la salida
const output = document.getElementById("output");

// Clase base Animales
class Animales {
    constructor(nombre) {
        this.nombre = nombre;
    }

    sonido() {
        output.innerHTML += "Este animal hace un sonido.<br>";
    }
}

// Clase Perro que hereda de Animales
class Perro extends Animales {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    sonido() {
        output.innerHTML += `${this.nombre}, un perro de raza ${this.raza}, hace: ¡Guau guau!<br><br><hr>`;
    }
}

// Clase Gato que hereda de Animales
class Gato extends Animales {
    constructor(nombre, color) {
        super(nombre);
        this.color = color;
    }

    sonido() {
        output.innerHTML += `${this.nombre}, un gato de color ${this.color}, hace: ¡Miau miau!<br><br><hr>`;
    }
}

// Clase Pajaro que hereda de Animales
class Pajaro extends Animales {
    constructor(nombre, especie) {
        super(nombre);
        this.especie = especie;
    }

    sonido() {
        output.innerHTML += `${this.nombre}, un pajaro de la especie ${this.especie}, hace: ¡Pio pio!<br><br>`;
    }
}

// Funcion que recibe cualquier tipo de animal y muestra su sonido
function mostrarSonido(animal) {
    animal.sonido();
}

// Creacion de objetos
const perro = new Perro("Max", "Labrador");
const gato = new Gato("Whiskers", "Negro");
const pajaro = new Pajaro("Tweety", "Canario");

// Llamado a la funcion para cada objeto
mostrarSonido(perro);
mostrarSonido(gato);
mostrarSonido(pajaro);
