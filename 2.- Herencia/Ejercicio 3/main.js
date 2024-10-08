// Super clase
class Instrumento {
    // Constructor
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = parseInt(prompt(`Digite el precio de la ${this.tipo}: `)); // Se utiliza prompt para pedir al usuario el precio del instrumento
    }

    // Metodo publico
    registrar() {
        document.write(`
            <h1 class='bg-primary text-white text-center p-3'>Instrumento</h1>
            <hr>
            <div class='alert alert-primary' role='alert'>Instrumento Registrado</div>
            <hr>
            Tipo: ${this.tipo}<br>
            Marca: ${this.marca}<br>
            Material: ${this.material}<br>
            Precio: $${this.precio}<br>
        `);
    }
}

// Subclase Guitarra
class Guitarra extends Instrumento {
    // Constructor
    constructor(tipo, marca, material, num_cuerdas) {
        super(tipo, marca, material); // Hereda de Instrumento
        this.num_cuerdas = num_cuerdas;
        this.acordes_basicos = prompt("Digite los acordes basicos que conoce: "); // Se utiliza prompt para pedir los acordes basicos que conoce
    }

    // Metodo para tocar la guitarra
    tocar() {
        document.write(`
            Los acordes basicos que conoce son: ${this.acordes_basicos}<br>
            <hr>
            <div class='alert alert-success text-center' role='alert'>
                ¡Estas tocando la guitarra con ${this.num_cuerdas} cuerdas usando los acordes: ${this.acordes_basicos}!
            </div>
        `);
    }
}

// Instanciar un objeto de la clase Guitarra
let mi_guitarra = new Guitarra('Guitarra', 'Fender', 'Madera', 6);
mi_guitarra.registrar();
mi_guitarra.tocar();
