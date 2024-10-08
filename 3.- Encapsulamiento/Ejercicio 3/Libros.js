// Clase Libro con atributos privados
class Libro {
    // Metodo constructor
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo; // Privado
        this._autor = autor;   // Privado
        this._isbn = isbn;     // Privado
        this.editorial = editorial; // Publico
    }

    // Metodo getter para titulo
    obtenerTitulo() {
        return this._titulo;
    }

    // Metodo getter para autor
    obtenerAutor() {
        return this._autor;
    }

    // Metodo getter para isbn
    obtenerIsbn() {
        return this._isbn;
    }

    // Metodo setter para titulo
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    // Metodo setter para autor
    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    // Metodo setter para isbn
    establecerIsbn(nuevoIsbn) {
        this._isbn = nuevoIsbn;
    }

    // Metodo para mostrar detalles del libro
    mostrarDetalles() {
        document.write(`\nTitulo: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`ISBN: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// Objeto
const libro = new Libro("La culpa es de la vaca","Marta Ines Bernal Trujillo","958429458X","Planeta, S. A");

// Imprimir atributos publicos y privados
libro.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
libro.establecerTitulo("El principito"); // Setter
document.write(`Titulo: ${libro.obtenerTitulo()} <br>`); // Getter
libro.establecerAutor("Antoine de Saint-Exupéry"); // Setter
document.write(`Autor: ${libro.obtenerAutor()} <br>`); // Getter
libro.establecerIsbn(8415631014); // Setter
document.write(`ISBN: ${libro.obtenerIsbn()} <br>`); // Getter
document.write(`Editorial: ${libro.editorial} <br>`); // Publico
