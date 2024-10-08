// Super clase
class Electronico {
    // Constructor
    constructor(marca, modelo, procesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = prompt(`Digite la cantidad de memoria RAM en GB: `); // Solicitar al usuario la cantidad de RAM
    }

    // Metodo publico
    registrar() {
        document.write(`
            <h1 class='bg-primary text-white text-center p-3'>Electronico</h1>
            <hr>
            <div class='alert alert-primary' role='alert'>Electronico Registrado</div>
            <hr>
            Marca: ${this.marca}<br>
            Modelo: ${this.modelo}<br>
            Procesador: ${this.procesador}<br>
            RAM: ${this.ram} GB<br>
        `);
    }
}

// Subclase Laptop
class Laptop extends Electronico {
    // Constructor
    constructor(marca, modelo, procesador, disco_duro) {
        super(marca, modelo, procesador); // Hereda de Electronico
        this.disco_duro = disco_duro;
        this.duracion_bateria = parseInt(prompt("Digite la cantidad de horas que dura la bateria: ")); // Solicitar duracion de bateria
    }

    // Metodo para encender la laptop
    encender() {
        // Alerta de Bootstrap
        document.write(`
            <div class='alert alert-success text-center' role='alert'>
                Encendiendo la laptop ${this.marca} con disco duro ${this.disco_duro} y ${this.duracion_bateria} horas de bateria.
            </div>
        `);
    }
}

// Instanciar un objeto de la clase Laptop
let mi_laptop = new Laptop('HP', 'Envy', 'Intel i7', 'SSD 512GB');
mi_laptop.registrar();
mi_laptop.encender();
