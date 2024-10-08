// Defino la clase Moto
class Moto {
    // Metodo Constructor
    constructor(marca, modelo, cilindraje, tipo_combustible, color) {
        this.marca = marca
        this.modelo = modelo
        this.cilindraje = cilindraje
        this.tipo_combustible = tipo_combustible
        this.color = color
        this.motor_encendido = false
        this.nivel_combustible = 40
    }

    // Metodo para mostrar detalles del objeto
    mostrarInformacion() {
        document.write(`<h1 class='bg-primary text-white text-center p-3'>Informacion de la Moto: ${this.marca} ${this.modelo}</h1>`)
        document.write("<span class='badge text-bg-success'>Metodo Mostrar Informacion</span><br>")
        document.write("Marca: " + this.marca + "<br>")
        document.write("Modelo: " + this.modelo + "<br>")
        document.write("Cilindraje: " + this.cilindraje + "<br>")
        document.write("Tipo de Combustible: " + this.tipo_combustible + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("Nivel de Combustible: " + this.nivel_combustible + "%<br>")
        document.write("<hr>")
    }

    // Metodo para encender el motor
    encenderMotor() {
        if (!this.motor_encendido) {
            this.motor_encendido = true
            document.write(`<span class='badge text-bg-success'>Metodo Encender Motor</span><br>`)
            document.write(`El motor de la ${this.marca} ${this.modelo} esta encendido.<br>`)
        } else {
            document.write(`<span class='badge text-bg-danger'>Metodo Encender Motor</span><br>`)
            document.write(`El motor de la ${this.marca} ${this.modelo} ya esta encendido.<br>`)
        }
        document.write("<hr>")
    }

    // Metodo para revisar el combustible
    revisarCombustible() {
        document.write(`<span class='badge text-bg-success'>Metodo Revisar Combustible</span><br>`)
        document.write(`Nivel de combustible en la ${this.marca} ${this.modelo}: ${this.nivel_combustible}%<br>`)
        if (this.nivel_combustible < 20) {
            document.write("Advertencia: Bajo nivel de combustible.<br>")
        }
        document.write("<hr>")
    }
}

// Creamos los objetos a partir de instanciar la clase Moto
let moto_1 = new Moto("Yamaha", "80", "80CC", "Gasolina", "Roja")
let moto_2 = new Moto("Honda", "XR", "190CC", "Gasolina", "Blanca")
let moto_3 = new Moto("Harley", "Davidson", "200CC", "Gasolina", "Marron")

// Mostrar detalles y realizar acciones para cada moto
moto_1.mostrarInformacion()
moto_1.encenderMotor()
moto_1.revisarCombustible()

moto_2.mostrarInformacion()
moto_2.encenderMotor()
moto_2.revisarCombustible()

moto_3.mostrarInformacion()
moto_3.encenderMotor()
moto_3.revisarCombustible()
