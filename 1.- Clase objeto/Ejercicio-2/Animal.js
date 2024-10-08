// Defino la clase Animal
class Animal {
    // Metodo Constructor
    constructor(nombre, especie, edad, tamaño, color) {
        // Defino las propiedades para la instancia
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
        this.tamaño = tamaño
        this.color = color
        this.comida = null
        this.formaMovimiento = null
    }

    // Metodo para mostrar detalles del objeto
    mostrarInformacion() {
        document.write(`<h1 class='bg-primary text-white text-center p-3'>Informacion del Animal ${this.nombre} <i class='bi bi-paw'></i></h1>`)
        document.write("<span class='badge text-bg-success'>Metodo Mostrar Informacion</span><br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("Especie: " + this.especie + "<br>")
        document.write("Edad: " + this.edad + "<br>")
        document.write("Tamaño: " + this.tamaño + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("<hr>")
    }

    // Metodo para hacer sonido
    hacerSonido() {
        let sonido = prompt(`¿Que sonido hace ${this.nombre} (${this.especie})?`)
        if (sonido !== null && sonido.trim() !== "") {
            document.write(`<span class='badge text-bg-success'>Metodo Hacer Sonido</span><br>`)
            document.write(`${this.nombre} hace el sonido: ${sonido}<br>`)
        } else {
            document.write("Sonido no valido<br>")
        }
        document.write("<hr>")
    }

    // Metodo para moverse
    moverse() {
        this.formaMovimiento = prompt(`¿Como se mueve ${this.nombre} (${this.especie})?`)
        if (this.formaMovimiento !== null && this.formaMovimiento.trim() !== "") {
            document.write(`<span class='badge text-bg-success'>Metodo Moverse</span><br>`)
            document.write(`${this.nombre} se mueve de esta forma: ${this.formaMovimiento}<br>`)
        } else {
            document.write("Forma de movimiento no valida<br>")
        }
        document.write("<hr>")
    }
}

// Creamos los objetos a partir de instanciar la clase Animal
let animal_1 = new Animal("Rex", "Perro", 5, "Grande", "Marron")
let animal_2 = new Animal("Luna", "Gato", 3, "Mediano", "Blanco")
let animal_3 = new Animal("Kiwi", "Ave", 2, "Pequeño", "Verde")

// Mostrar los detalles animal_1
animal_1.mostrarInformacion()
// Hacer sonido animal_1
animal_1.hacerSonido()
// Moverse animal_1
animal_1.moverse()

// Mostrar los detalles animal_2
animal_2.mostrarInformacion()
// Hacer sonido animal_2
animal_2.hacerSonido()
// Moverse animal_2
animal_2.moverse()

// Mostrar los detalles animal_3
animal_3.mostrarInformacion()
// Hacer sonido animal_3
animal_3.hacerSonido()
// Moverse animal_3
animal_3.moverse()
