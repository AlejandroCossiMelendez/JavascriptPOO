// Selecciona el contenedor donde se mostrara la salida
const output = document.getElementById("output");

// Clase base InstrumentoMusicales
class InstrumentoMusicales {
    constructor(nombre) {
        this.nombre = nombre;
    }

    tocar() {
        output.innerHTML += "Este instrumento se esta tocando.<br>";
    }
}

// Clase Guitarra que hereda de InstrumentoMusicales
class Guitarra extends InstrumentoMusicales {
    constructor(nombre, cuerdas) {
        super(nombre);
        this.cuerdas = cuerdas;
    }

    tocar() {
        output.innerHTML += `La ${this.nombre} tiene ${this.cuerdas} cuerdas y se toca pulsando las cuerdas.<br><br><hr>`;
    }
}

// Clase Piano que hereda de InstrumentoMusicales
class Piano extends InstrumentoMusicales {
    constructor(nombre, teclas) {
        super(nombre);
        this.teclas = teclas;
    }

    tocar() {
        output.innerHTML += `El ${this.nombre} tiene ${this.teclas} teclas y se toca presionando las teclas.<br><br><hr>`;
    }
}

// Clase Trompeta que hereda de InstrumentoMusicales
class Trompeta extends InstrumentoMusicales {
    constructor(nombre, boquilla) {
        super(nombre);
        this.boquilla = boquilla;
    }

    tocar() {
        output.innerHTML += `La ${this.nombre} tiene una boquilla ${this.boquilla} y se toca soplando a traves de ella.<br><br>`;
    }
}

// Funcion que recibe cualquier tipo de instrumento y muestra como se toca
function mostrarInstrumento(instrumento) {
    instrumento.tocar();
}

// Creacion de objetos
const guitarra = new Guitarra("Guitarra Electrica", 6);
const piano = new Piano("Piano de Cola", 88);
const trompeta = new Trompeta("Trompeta", "de metal");

// Llamado a la funcion para cada objeto
mostrarInstrumento(guitarra);
mostrarInstrumento(piano);
mostrarInstrumento(trompeta);
