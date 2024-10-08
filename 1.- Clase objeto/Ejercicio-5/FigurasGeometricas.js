// Defino la clase FigurasGeometricas
class FigurasGeometricas {
    // Metodo Constructor
    constructor(tipo, color, lados, longitudLado) {
        this.tipo = tipo
        this.color = color
        this.lados = lados
        this.longitudLado = longitudLado
        this.area = null
        this.perimetro = null
    }

    // Metodo para calcular el area (solo para figuras regulares)
    calcularArea() {
        if (this.tipo === "Cuadrado") {
            this.area = this.longitudLado ** 2
        } else if (this.tipo === "Triangulo") {
            this.area = (this.longitudLado ** 2 * Math.sqrt(3)) / 4
        } else if (this.tipo === "Circulo") {
            let radio = this.longitudLado / 2
            this.area = Math.PI * (radio ** 2)
        } else {
            this.area = "area no calculable para esta figura"
        }
        document.write(`<span class='badge text-bg-success'>Metodo Calcular area</span><br>`)
        document.write(`area del ${this.tipo}: ${this.area}<br>`)
        document.write("<hr>")
    }

    // Metodo para calcular el perimetro
    calcularPerimetro() {
        if (this.tipo === "Cuadrado") {
            this.perimetro = 4 * this.longitudLado
        } else if (this.tipo === "Triangulo") {
            this.perimetro = 3 * this.longitudLado
        } else if (this.tipo === "Circulo") {
            this.perimetro = Math.PI * this.longitudLado
        } else {
            this.perimetro = "Perimetro no calculable para esta figura"
        }
        document.write(`<span class='badge text-bg-success'>Metodo Calcular Perimetro</span><br>`)
        document.write(`Perimetro del ${this.tipo}: ${this.perimetro}<br>`)
        document.write("<hr>")
    }
}

// Creamos los objetos a partir de instanciar la clase FigurasGeometricas
let figura_1 = new FigurasGeometricas("Cuadrado", "Rojo", 4, 5)
let figura_2 = new FigurasGeometricas("Triangulo", "Azul", 3, 6)
let figura_3 = new FigurasGeometricas("Circulo", "Verde", 0, 10)

// Mostrar el area y el perimetro para cada figura
figura_1.calcularArea()
figura_1.calcularPerimetro()

figura_2.calcularArea()
figura_2.calcularPerimetro()

figura_3.calcularArea()
figura_3.calcularPerimetro()
