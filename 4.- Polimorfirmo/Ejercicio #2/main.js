// Selecciona el contenedor donde se mostrara la salida
const output = document.getElementById("output");

// Clase base Vehiculos
class Vehiculos {
    constructor(marca, año) {
        this.marca = marca;
        this.año = año;
    }

    mostrarInfo() {
        output.innerHTML += `Marca: ${this.marca}<br>Año: ${this.año}<br><br>`;
    }
}

// Clase Carro que hereda de Vehiculos
class Carro extends Vehiculos {
    constructor(marca, modelo, año) {
        super(marca, año);
        this.modelo = modelo;
    }

    mostrarInfo() {
        output.innerHTML += "Carro en venta:<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Año: ${this.año}<br><br><hr>`;
    }
}

// Clase Moto que hereda de Vehiculos
class Moto extends Vehiculos {
    constructor(marca, cilindrada, año) {
        super(marca, año);
        this.cilindrada = cilindrada;
    }

    mostrarInfo() {
        output.innerHTML += "Moto en venta:<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Cilindrada: ${this.cilindrada} cc<br>`;
        output.innerHTML += `Año: ${this.año}<br><br><hr>`;
    }
}

// Clase Bicicleta que hereda de Vehiculos
class Bicicleta extends Vehiculos {
    constructor(marca, tipo, velocidadMaxima, año) {
        super(marca, año);
        this.tipo = tipo;
        this.velocidadMaxima = velocidadMaxima;
    }

    mostrarInfo() {
        output.innerHTML += "Bicicleta en venta:<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += `Velocidad Maxima: ${this.velocidadMaxima} km/h<br>`;
        output.innerHTML += `Año: ${this.año}<br><br>`;
    }
}

// Funcion que muestra la informacion de cualquier tipo de vehiculo
function mostrarInformacion(vehiculo) {
    vehiculo.mostrarInfo();
}

// Creacion de objetos
const carro = new Carro("Toyota", "Corolla", 2024);
const moto = new Moto("Honda", 250, 2025);
const bicicleta = new Bicicleta("Shimano", "Montaña", 25, 2023);

// Llamado a la funcion para mostrar la descripcion de cada vehiculo
mostrarInformacion(carro);
mostrarInformacion(moto);
mostrarInformacion(bicicleta);
