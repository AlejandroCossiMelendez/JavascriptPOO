// Defino la clase Empleado
class Empleado {
    // Metodo Constructor
    constructor(nombre, edad, cargo, salario, añosExperiencia) {
        // Defino las propiedades para la instancia
        this.nombre = nombre
        this.edad = edad
        this.cargo = cargo
        this.salario = salario
        this.añosExperiencia = añosExperiencia
    }

    // Metodo para mostrar detalles del objeto
    mostrarInformacion() {
        document.write(`<h1 class='bg-primary text-white text-center p-3'>Informacion del Empleado ${this.nombre} <i class='bi bi-person'></i></h1>`)
        document.write("<span class='badge text-bg-success'>Metodo Mostrar Informacion</span><br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("Edad: " + this.edad + "<br>")
        document.write("Cargo: " + this.cargo + "<br>")
        document.write("Salario: " + this.salario + "<br>")
        document.write("Años de Experiencia: " + this.añosExperiencia + "<br>")
        document.write("<hr>")
    }

    // Metodo para trabajar
    trabajar() {
        document.write(`<span class='badge text-bg-success'>Metodo Trabajar</span><br>`)
        document.write(`${this.nombre} est trabajando como ${this.cargo}.<br>`)
        document.write("<hr>")
    }

    // Metodo para calcular bono
    calcularBono() {
        let bono = this.salario * 0.1  // Bono del 10% del salario
        document.write(`<span class='badge text-bg-success'>Metodo Calcular Bono</span><br>`)
        document.write(`${this.nombre} recibir un bono de $${bono.toFixed(2)}.<br>`)
        document.write("<hr>")
    }
}

// Creamos los objetos a partir de instanciar la clase Empleado
let empleado_1 = new Empleado("Luis", 45, "Maestro de Obra", 2500000, "20 Años")
let empleado_2 = new Empleado("Juan", 30, "Desarrollador", 3500000, "7 Años")
let empleado_3 = new Empleado("Ana", 39, "Gerente", 8000000, "12 Años")

// Mostrar los detalles empleado_1
empleado_1.mostrarInformacion()
// Trabajar empleado_1
empleado_1.trabajar()
// Calcular bono empleado_1
empleado_1.calcularBono()

// Mostrar los detalles empleado_2
empleado_2.mostrarInformacion()
// Trabajar empleado_2
empleado_2.trabajar()
// Calcular bono empleado_2
empleado_2.calcularBono()

// Mostrar los detalles empleado_3
empleado_3.mostrarInformacion()
// Trabajar empleado_3
empleado_3.trabajar()
// Calcular bono empleado_3
empleado_3.calcularBono()
