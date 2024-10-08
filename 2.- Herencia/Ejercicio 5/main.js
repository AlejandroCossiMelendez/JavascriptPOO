// Super clase
class Reloj {
    // Constructor
    constructor(marca, tipo, material) {
        this.marca = marca;
        this.tipo = tipo;
        this.material = material;
        this.precio = prompt(`Digite el precio del reloj: `); // Se utiliza prompt para pedir el precio del reloj
    }

    // Metodo publico
    registrar() {
        document.write(`
            <h1 class='bg-primary text-white text-center p-3'>Reloj</h1>
            <hr>
            <div class='alert alert-primary' role='alert'>Reloj Registrado</div>
            <hr>
            Marca: ${this.marca}<br>
            Tipo: ${this.tipo}<br>
            Material: ${this.material}<br>
            Precio: $${this.precio}<br>
        `);
    }
}

// Subclase RelojInteligente
class RelojInteligente extends Reloj {
    // Constructor
    constructor(marca, tipo, material, pantalla) {
        super(marca, tipo, material); // Hereda de Reloj
        this.pantalla = pantalla;
        this.sistema_operativo = prompt("Digite el sistema operativo del reloj: "); // Se utiliza prompt para pedir el sistema operativo
    }

    // Metodo para encender el reloj
    encender() {
        document.write(`
            <div class='alert alert-success text-center' role='alert'>
                Encendiendo el reloj inteligente ${this.marca} con pantalla ${this.pantalla} y sistema operativo ${this.sistema_operativo}.
            </div>
        `);
    }
}

// Instanciar un objeto de la clase RelojInteligente
let mi_reloj = new RelojInteligente('Samsung', 'Deportivo', 'Metal', 'OLED');
mi_reloj.registrar();
mi_reloj.encender();
