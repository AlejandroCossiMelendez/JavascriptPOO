// Super clase
class Electrodomestico{
    // Constructor
    constructor(marca, color, capacidad){
        this.marca = marca
        this.color = color
        this.capacidad = capacidad
        this.consumo = parseInt(prompt("Digite el consumo en kWh: ")); // Se utiliza pompt para pedir al usuario el consumo en kWh
    }

    // Metodo publico
    registrar(){
        document.write(`
                        <h1 class='bg-primary text-white text-center p-3'>Electrodomesticos</h1>
                        <hr>
                        <div class='alert alert-primary' role='alert'>Electrodomestico Registrado</div>
                        <hr>
                        Marca: ${this.marca}<br>
                        Color: ${this.color}<br>
                        Capacidad: ${this.capacidad}<br>
                        Consumo electrico: ${this.consumo} kWh<br>
                       `);
    }
}
// Subclase Refrigerador
class Refrigerador extends Electrodomestico{
    // Constructor
    constructor(marca, color, capacidad, tipo){
        super(marca, color, capacidad); //Hereda de Electrodomestico
        this.tipo = tipo;
        this.temperatura = parseInt(prompt("Digite la temperatura inicial de el refrigerador: ")); // Se utiliza prompt nuevamente para pedir la temperatura inicial del refrigerador
    }

    // Metodo para ajustar la temperatura
    ajustar_temperatura(){
        document.write(`Temperatura inicial: ${this.temperatura} °C <hr>`);

        this.temperaturaAjustada = parseInt(prompt("Digite la nueva temperatura del refrigerador: "))
        
        document.write(`<div class='alert alert-success' role='alert'>La nueva temperatura del refrigerador es: ${this.temperaturaAjustada}°C </div><hr>`)
        
    }
}

// Instanciar un objeto de la clase Refrigerador
let mi_refrigerador = new Refrigerador('Samsung', 'Blanco', 400, 'No Frost');
mi_refrigerador.registrar();
mi_refrigerador.ajustar_temperatura();
