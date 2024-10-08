// Clase Producto con atributos privados
class Producto {
    // Metodo constructor
    constructor(nombre, precio, cantidad, categoria) {
        this._nombre = nombre; // Privado (convencion en JS usando _)
        this._precio = precio; // Privado
        this.cantidad = cantidad; // Publico
        this.categoria = categoria; // Publico
    }

    // Metodo getter para nombre
    obtenerNombre() {
        return this._nombre;
    }

    // Metodo getter para precio
    obtenerPrecio() {
        return this._precio;
    }

    // Metodo setter para nombre
    establecerNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Metodo setter para precio
    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    // Metodo para mostrar detalles del producto
    mostrarDetalles() {
        document.write(`\nNombre: ${this._nombre}<br>`);
        document.write(`Precio: $${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoria: ${this.categoria}<br>`);
    }
}

// Objeto
const producto = new Producto("Iphone", 1500000, 2, "Telefonos");

// Imprimir atributos publicos y privados
producto.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
producto.establecerNombre("Xiaomi Redmi Note 10S"); // Setter
document.write(`Nombre: ${producto.obtenerNombre()} <br>`); // Getter
producto.establecerPrecio(800000); // Setter
document.write(`Precio: $${producto.obtenerPrecio()} <br>`); // Getter
document.write(`Cantidad: ${producto.cantidad} <br>`); // Pu}blico
document.write(`Categoria: ${producto.categoria} <br>`); // Publico
