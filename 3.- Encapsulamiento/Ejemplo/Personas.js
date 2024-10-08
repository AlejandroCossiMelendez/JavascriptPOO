// Clase Personas con atributos privados
class Personas {
    // Metodo constructor
    constructor(nombres, apellidos, identidad, fechanacimiento, sexo) {
        this._nombres = nombres; // Privado (convencion en JS usando _)
        this._apellidos = apellidos; // Privado
        this._identidad = identidad; // Privado
        this.fechanacimiento = fechanacimiento; // Publico
        this.sexo = sexo; // Publico
    }

    // Metodo getter para nombres
    obtenerNombres() {
        return this._nombres;
    }

    // Metodo getter para apellidos
    obtenerApellidos() {
        return this._apellidos;
    }

    // Metodo getter para identidad
    obtenerIdentidad() {
        return this._identidad;
    }

    // Metodo setter para nombres
    establecerNombres(nuevoNombres) {
        this._nombres = nuevoNombres;
    }

    // Metodo setter para apellidos
    establecerApellidos(nuevoApellidos) {
        this._apellidos = nuevoApellidos;
    }

    // Metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\nNombres: ${this._nombres}<br>`);
        document.write(`Apellidos: ${this._apellidos}<br>`);
        document.write(`N° Identidad: ${this._identidad}<br>`);
        document.write(`Fecha nacimiento: ${this.fechanacimiento}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
    }
}

// Objeto
const persona = new Personas("Jorge", "Rojas", 1102345678, "14/09/2000", "M");

// Imprimir atributos publicos y privados
persona.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
persona.establecerNombres("Carlos"); // Setter
document.write(`Nombres: ${persona.obtenerNombres()} <br>`); // Getter
persona.establecerApellidos("Perez"); // Setter
document.write(`Apellidos: ${persona.obtenerApellidos()} <br>`); // Getter
document.write(`N° Identidad: ${persona.obtenerIdentidad()} <br>`); // Getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento} <br>`); // Publico
document.write(`Sexo: ${persona.sexo} <br>`); // Publico
