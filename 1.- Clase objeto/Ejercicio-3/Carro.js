// Defino la clase Carro
class Carro {
    // Metodo Constructor
    constructor(marca, modelo, año, tipoCombustible, color) {
        // Defino las propiedades para la instancia
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.tipoCombustible = tipoCombustible
        this.color = color
        this.velocidad = 0  // Velocidad inicial en 0
    }

    // Metodo para mostrar detalles del objeto
    mostrarInformacion() {
        document.write(`<h1 class='bg-primary text-white text-center p-3'>Informacion del Carro ${this.marca} ${this.modelo} <i class='bi bi-car-front'></i></h1>`)
        document.write("<span class='badge text-bg-success'>Metodo Mostrar Informacion</span><br>")
        document.write("Marca: " + this.marca + "<br>")
        document.write("Modelo: " + this.modelo + "<br>")
        document.write("Año: " + this.año + "<br>")
        document.write("Tipo de Combustible: " + this.tipoCombustible + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("<hr>")
    }

    // Metodo para acelerar
    acelerar() {
        let incremento = parseInt(prompt(`¿Cuantos km/h deseas acelerar el ${this.marca} ${this.modelo}?`), 10)
        if (!isNaN(incremento) && incremento > 0) {
            this.velocidad += incremento
            document.write(`<span class='badge text-bg-success'>Metodo Acelerar</span><br>`)
            document.write(`El carro ha acelerado. Velocidad actual: ${this.velocidad} km/h<br>`)
        } else {
            document.write("Incremento no valido<br>")
        }
        document.write("<hr>")
    }

    // Metodo para frenar
    frenar() {
        let decremento = parseInt(prompt(`¿Cuantos km/h deseas reducir la velocidad del ${this.marca} ${this.modelo}?`), 10)
        if (!isNaN(decremento) && decremento > 0) {
            if (this.velocidad - decremento >= 0) {
                this.velocidad -= decremento
            } else {
                this.velocidad = 0
            }
            document.write(`<span class='badge text-bg-success'>Metodo Frenar</span><br>`)
            document.write(`El carro ha frenado. Velocidad actual: ${this.velocidad} km/h<br>`)
        } else {
            document.write("Decremento no valido<br>")
        }
        document.write("<hr>")
    }
}

// Creamos los objetos a partir de instanciar la clase Carro
let carro_1 = new Carro("Toyota", "Supra MK4", 2024, "Gasolina", "Rojo")
let carro_2 = new Carro("Ford", "Pickup", 1980, "Gasolina", "Beige")
let carro_3 = new Carro("Tesla", "Model S", 2022, "Electrico", "Negro")

// Mostrar los detalles carro_1
carro_1.mostrarInformacion()
// Acelerar carro_1
carro_1.acelerar()
// Frenar carro_1
carro_1.frenar()

// Mostrar los detalles carro_2
carro_2.mostrarInformacion()
// Acelerar carro_2
carro_2.acelerar()
// Frenar carro_2
carro_2.frenar()

// Mostrar los detalles carro_3
carro_3.mostrarInformacion()
// Acelerar carro_3
carro_3.acelerar()
// Frenar carro_3
carro_3.frenar()
